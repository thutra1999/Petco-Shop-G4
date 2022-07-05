import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions/index';
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setCartItems(props.store_state.Carts);
  }, [props.store_state]);

  const getTotal = () => {
    let sum = 0;
    for (let item of cartItems) {
      if (item.discount > 0) {
        sum += item.price * item.quantity - item.discount * item.quantity;
      } else {
        sum += item.price * item.quantity;
      }

    }
    return sum;
  };

  var carts_jsx = '';
  if (cartItems.length > 0) {
    carts_jsx = cartItems.map((item, key) => (
      <tr>
        <td>{key + 1}</td>
        <td>
          <button
            class="btn btn-sm"
            onClick={() => props.DecreaseQuantity(key)}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            class="form-control-sm"
            style={{ width: '5em', min: '0' }}
          />
          <button
            class="btn btn-sm"
            onClick={() => props.IncreaseQuantity(key)}
          >
            +
          </button>
        </td>
        <td>
          <div class='row'>{item.name}</div>
        </td>
        <td class="text-right">{item.price} VNĐ</td>
        <td class="text-right">{(item.discount > 0) ? item.discount : 0} VNĐ</td>
        <td class="text-right">{(item.discount > 0) ? item.price * item.quantity - item.discount * item.quantity : item.price * item.quantity} VNĐ</td>
        <td>
          <div class='row'>
            <button class="btn btn-sm btn-danger"
              onClick={() => props.DeleteCart(key)}>
              <i class="fas fa-times"></i>
            </button>
          </div>
        </td>
      </tr>
    ));
  }

  var product_name_bill = '';
  if (cartItems.length > 0) {
    product_name_bill = cartItems.map((item) => (
      <li>{item.name}<span>{(item.discount > 0) ? (item.price * item.quantity - item.discount * item.quantity) : (item.price * item.quantity)} VNĐ</span></li>
    ))
  }


  var price_bill = 0;
  if (cartItems.length > 0) {
    cartItems.map((item) => {
      if (item.discount > 0) {
        price_bill += item.price * item.quantity - item.discount * item.quantity;
      } else {
        price_bill += item.price * item.quantity;
      }
      return price_bill;
    })
  }

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">Giỏ hàng của bạn</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Số lượng</th>
                <th>Tên sản phẩm</th>
                <th class="text-right">Giá sản phẩm</th>
                <th class="text-right">Giảm giá</th>
                <th class="text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colspan="5" class="text-center">
                    Giỏ hàng của bạn trống
                  </td>
                </tr>
              ) : (
                ''
              )}
              {carts_jsx}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td colspan="4" class="text-right">
                  Tổng tiền:
                </td>
                <td class="text-right">{getTotal()} VND</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div><br></br><br></br>
      <div class="row">
        <h3>Thông tin khách hàng</h3>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div class="form-floating mb-3">
            <input type="name" class="form-control" id="" placeholder="Name..."></input>
            <label for="floatingInput">Họ Và Tên</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="" placeholder="Adress..."></input>
            <label for="floatingPassword">Địa Chỉ</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="" placeholder="Phonenumber..."></input>
            <label for="floatingPassword">Số Điện Thoại</label>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="checkout__order">
            <h4>Đơn hàng của bạn</h4>
            <div class="checkout__order__products">Sản phẩm <span>Tổng</span></div>
            <ul>
              {product_name_bill}
            </ul>
            <div class="checkout__order__subtotal">Thành tiền <span>{price_bill} VNĐ</span></div>
            <div class="text-center">
              <Link to="/shop">
                <button class="btn btn-primary m-1">
                  Tiếp tục mua hàng
                </button>
              </Link>
              <button class="btn btn-danger m-1" type="button">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    store_state: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
