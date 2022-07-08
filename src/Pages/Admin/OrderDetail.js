import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Components/Loader/Loader";

const OrderDetail = () => {
  let navigate = useNavigate();
  const params = useParams();
  const [orders, setOrders] = useState([]);
  const [loadItem, setLoadItem] = useState(true);
  const [editStatusOrder, setEditStatusOrder] = useState(false);

  useEffect(() => {
    let url = "https://62b04ad2e460b79df0424941.mockapi.io/id/" + params.id;

    setLoadItem(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .then(() => setLoadItem(false));
  }, []);

  var cartList = [];
  if (orders.cart != null) {
    cartList = orders.cart.map((item) => (
      <ul className="nav navbar-nav" key={item.id}>
        <li className="row">
          <div className="col-6">{item.name}</div>
          <div className="col-1">x{item.quantity}</div>
        </li>
      </ul>
    ));
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...orders };
    data[name] = value;
    setOrders(data);
  };

  const saveUser = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orders),
    };
    fetch(
      "https://62b04ad2e460b79df0424941.mockapi.io/id/" + params.id,
      requestOptions
    )
      .then((response) => response.json())
      .then(() => {
        navigate(-1);
      });
  };

  return (
    <>
      {!loadItem ? (
        <div className="container">
          <div className="panel-body inf-content">
            <div className="row">
              <div className="col">
                <strong className="h3">Thông tin đơn hàng</strong>
                <br />
                <div className="table-responsive">
                  <table className="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Mã đơn hàng</strong>
                        </td>
                        <td className="text-primary">{orders.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tên khách hàng</strong>
                        </td>
                        <td className="text-primary">{orders.useName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Số điện thoại</strong>
                        </td>
                        <td className="text-primary">{orders.phone}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Địa chỉ</strong>
                        </td>
                        <td className="text-primary">{orders.address}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td className="text-primary">{orders.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Thành phần đơn hàng</strong>
                        </td>
                        <td>{cartList}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Thời gian đặt hàng</strong>
                        </td>
                        <td className="text-primary">{orders.date}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Trạng thái đơn hàng</strong>
                        </td>
                        {editStatusOrder ? (
                          <td className="select-container">
                            <select
                              name="status"
                              value={orders.status}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            >
                              <option key={1} value="Chờ xác nhận">
                                Chờ xác nhận
                              </option>
                              <option
                                key={2}
                                value="Đã xác nhận. Đang chuẩn bị hàng"
                              >
                                Đã xác nhận. Đang chuẩn bị hàng
                              </option>
                              <option key={3} value="Đang giao hàng">
                                Đang giao hàng
                              </option>
                              <option key={4} value="Giao hàng thành công">
                                Giao hàng thành công
                              </option>
                              <option key={5} value="Đơn hủy">
                                Đơn hủy
                              </option>
                              <option key={6} value="Đơn hoàn">
                                Đơn hoàn
                              </option>
                            </select>
                          </td>
                        ) : (
                          <td className="text-primary">{orders.status}</td>
                        )}
                        <td>
                          <button onClick={() => setEditStatusOrder(true)}>
                            Chỉnh sửa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tổng giá trị đơn hàng</strong>
                        </td>
                        <td className="text-primary">{orders.price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {editStatusOrder && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => saveUser()}
            >
              Save
            </button>
          )}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Trở lại
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OrderDetail;
