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

  useEffect(() => {
    let url = "https://62b04ad2e460b79df0424941.mockapi.io/id/" + params.id;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  console.log(orders);
  console.log(orders.id);
  console.log(orders.useName);
  console.log(orders.cart);

  var cartList = [];
  if (orders.cart != null) {
    cartList = orders.cart.map((item) => (
      <ul className="nav navbar-nav">
        <li class="row">
          <div class="col-6">{item.name}</div>
          <div class="col-1">x{item.quantity}</div>
        </li>
      </ul>
    ));
  }

  return (
    <>
      {orders != null ? (
        <div class="container">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col">
                <strong class="h3">Thông tin đơn hàng</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Mã đơn hàng</strong>
                        </td>
                        <td class="text-primary">{orders.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tên khách hàng</strong>
                        </td>
                        <td class="text-primary">{orders.useName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Số điện thoại</strong>
                        </td>
                        <td class="text-primary">{orders.phone}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Địa chỉ</strong>
                        </td>
                        <td class="text-primary">{orders.address}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Email</strong>
                        </td>
                        <td class="text-primary">{orders.email}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Thành phần đơn hàng</strong>
                        </td>
                        <td>{cartList}</td>
                      </tr>
                      <tr>
                      <td>
                          <strong>Tổng giá trị đơn hàng</strong>
                        </td>
                        <td class="text-primary">
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
            class="btn btn-secondary"
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
