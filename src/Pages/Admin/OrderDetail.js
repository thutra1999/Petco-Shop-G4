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

  useEffect(() => {
    let url = "https://62b04ad2e460b79df0424941.mockapi.io/id/" + params.id;

        setLoadItem(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      }).then(() => setLoadItem(false));
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
                        <td className="text-primary">{orders.status}</td>
                      </tr>
                      <tr>
                      <td>
                          <strong>Tổng giá trị đơn hàng</strong>
                        </td>
                        <td className="text-primary">
                            {orders.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate(-1)}
          >
            Trở lại
          </button>
        </div>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default OrderDetail;
