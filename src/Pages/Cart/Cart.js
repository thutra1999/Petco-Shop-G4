import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
  ResetCart,
} from "../../actions/index";
import "./Cart.css";
import { Link } from "react-router-dom";
import success from "../../img/XliJ.gif";
import { useForm } from "react-hook-form";
import goShopping from "../../img/goShoping.gif"

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState({
    useName: "",
    address: "",
    phone: "",
    email: "",
    cart: {},
    price: "",
  });
  const [isBuyDone, setIsBuyDone] = useState(false);
  const [storeIsEmpty, setStoreIsEmpty] = useState(false)
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

  var carts_jsx = "";
  if (cartItems.length > 0) {
    carts_jsx = cartItems.map((item, key) => (
      <tr>
        <td>{key + 1}</td>
        <td>
          <button
            className="btn btn-sm"
            onClick={() => props.DecreaseQuantity(key)}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            className="form-control-sm"
            style={{ width: "5em", min: "0" }}
          />
          <button
            className="btn btn-sm"
            onClick={() => props.IncreaseQuantity(key)}
          >
            +
          </button>
        </td>
        <td>
          <div className="row">{item.name}</div>
        </td>
        <td className="text-right">{item.price.toLocaleString("en-US")} VNĐ</td>
        <td className="text-right">
          {item.discount > 0 ? item.discount.toLocaleString("en-US") : 0} VNĐ
        </td>
        <td className="text-right">
          {item.discount > 0
            ? (
                item.price * item.quantity -
                item.discount * item.quantity
              ).toLocaleString("en-US")
            : (item.price * item.quantity).toLocaleString("en-US")}{" "}
          VNĐ
        </td>
        <td>
          <div className="row">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => props.DeleteCart(key)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </td>
      </tr>
    ));
  }

  var product_name_bill = "";
  if (cartItems.length > 0) {
    product_name_bill = cartItems.map((item) => (
      <li>
        {item.name}
        <span>
          {item.discount > 0
            ? (
                item.price * item.quantity -
                item.discount * item.quantity
              ).toLocaleString("en-US")
            : (item.price * item.quantity).toLocaleString("en-US")}{" "}
          VNĐ
        </span>
      </li>
    ));
  }

  var price_bill = 0;
  if (cartItems.length > 0) {
    cartItems.map((item) => {
      if (item.discount > 0) {
        price_bill +=
          item.price * item.quantity - item.discount * item.quantity;
      } else {
        price_bill += item.price * item.quantity;
      }
      return price_bill;
    });
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...products };
    
    data[name] = value;
   
    setProducts(data);
  };

  useEffect(() => {
    let data = { ...products };
    data.cart = cartItems;
    data.price = price_bill;
   
    setProducts(data);
  }, [cartItems, price_bill]);

  const buyHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(products),
    };
    fetch(
      "https://62b04ad2e460b79df0424941.mockapi.io/id",
      requestOptions
    ).then((response) => response.json());
    setIsBuyDone(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(data != null && price_bill > 0){
      buyHandler();
    }
    if(price_bill === 0){
      setStoreIsEmpty(true);
    }
  };


  return (
    <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col mt-2">
          <h2 className="text-center">Giỏ hàng của bạn</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Số lượng</th>
                <th>Tên sản phẩm</th>
                <th className="text-right">Giá sản phẩm</th>
                <th className="text-right">Giảm giá</th>
                <th className="text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Giỏ hàng của bạn trống
                  </td>
                </tr>
              ) : (
                ""
              )}
              {carts_jsx}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td colSpan="4" className="text-right">
                  Tổng tiền:
                </td>
                <td className="text-right">
                  {getTotal().toLocaleString("en-US")} VND
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <h3>Thông tin khách hàng</h3>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              name="useName"
              placeholder="Name..."
              {...register("useName", { required: true })}
              onChange={(e)=> handleChange(e)}
            />
            {errors.useName?.type === "required" && (
              <span>Họ Tên không được bỏ trống!</span>
            )}
            <label htmlFor="floatingInput">Họ Tên</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Address..."
              {...register("address", { required: true })}
              onChange={(e)=> handleChange(e)}
            />
            {errors.address?.type === "required" && (
              <span>Địa Chỉ không được bỏ trống!</span>
            )}
            <label htmlFor="floatingPassword">Địa Chỉ</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="PhoneNumber..."
              
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}

              onChange={(e)=> handleChange(e)}
            />
            {errors.phone?.type === "required" && (
              <span>Số điện thoại không được bỏ trống!</span>
            )}
            {errors.phone?.type === "minLength" && (
              <span>Số điện thoại chỉ gồm 10 chữ số!</span>
            )}
            {errors.phone?.type === "maxLength" && (
              <span>Số điện thoại chỉ gồm 10 chữ số!</span>
            )}
            <label htmlFor="floatingPassword">Số Điện Thoại</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email..."
              
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
              onChange={(e)=> handleChange(e)}
            />
            {errors.email?.type === "required" && (
              <span>Email không được bỏ trống!</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>Email chưa chính xác!</span>
            )}
            <label htmlFor="floatingPassword">Email</label>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="checkout__order">
            <h4>Đơn hàng của bạn</h4>
            <div className="checkout__order__products">
              Sản phẩm <span>Tổng</span>
            </div>
            <ul>{product_name_bill}</ul>
            <div className="checkout__order__subtotal">
              Thành tiền <span>{price_bill.toLocaleString("en-US")} VNĐ</span>
            </div>
            <div className="text-center">
              <Link to="/shop">
                <button className="btn btn-primary m-1">Tiếp tục mua hàng</button>
              </Link>
              <button className="btn btn-danger m-1" type="submit">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
      {isBuyDone && (
        <div className="item_cart-popup-wrap">
          <div className="item_cart-wrap text-center">
            <div className="title h1">Thanh toán thành công</div>
            <div>
              <img src={success} alt="..." />
            </div>
            <Link to="/">
              <button className="btn btn-danger" onClick={() => props.ResetCart()}>
                Trở về trang chủ
              </button>
            </Link>
          </div>
        </div>
      )}
      {storeIsEmpty && 
       <div className="item_cart-popup-wrap">
       <div className="item_cart-wrap text-center">
         <div className="title h1">Giỏ hàng đang trống</div>
         <div>
           <img src={goShopping} alt="..." />
         </div>
         <Link to="/shop">
           <button className="btn btn-danger">
             Đi mua hàng
           </button>
         </Link>
       </div>
     </div>}
    </form>
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
  ResetCart,
})(Cart);
