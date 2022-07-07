import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo/logo.png";
import { connect } from 'react-redux';


const Header = (props) => {
 
  const [login, setLogin] = useState(false);
  const [formLogin, setFormLogin] = useState();
  const [searchIsHandler, setSearchIsHandler] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [numberCart, setNumberCart] = useState(null);

  useEffect(() => {
    setNumberCart(props.numberCart);
  }, [props.numberCart]);

  const searchHandler = () => {
    setSearchIsHandler((previous) => !previous);
    setSearchTerm('');
  };

  const choseLogin = () => {
    setLogin((previous) => !previous);
    loginHandler();
  };
  const loginHandler = () => {
    setFormLogin(
      <>
        <div class="title h1 text-center">Đăng nhập</div>
        <div class="row item_header-form">
          <div class="title h3">Tên đăng nhập</div>
          <input type="text" placeholder="Enter your username" />
          <div class="title h3">Mật khẩu</div>
          <input type="password" placeholder="Enter your password" />
          <button className="btn btn-danger">Login</button>
        </div>

        <div className="row">
          <span>
            Quên mật khẩu ? <u onClick={resetPasswordHandler}>Bấm vào đây</u>
          </span>
        </div>
        <div className="row">
          <span>
            Chưa có tài khoản ? <u onClick={signUpHandler}>Đăng ký tài khoản</u>
          </span>
        </div>
      </>
    );
  };

  const signUpHandler = () => {
    setFormLogin(
      <>
        <div class="title h1 text-center">Đăng ký tài khoản</div>
        <div class="row item_header-form">
          <div class="title h3">Tên đăng nhập</div>
          <input type="text" placeholder="Enter your username" />
          <div class="title h3">Mật khẩu</div>
          <input type="password" placeholder="Enter your password" />
          <div class="title h3">Xác nhận mật khẩu</div>
          <input type="password" placeholder="Repeat your password" />
          <button className="btn btn-danger">Tạo tài khoản</button>
        </div>
        <div className="row">
          <span>
            Quên mật khẩu ? <u onClick={resetPasswordHandler}>Bấm vào đây</u>
          </span>
        </div>
        <div className="row">
          <span>
            Đã có tài khoản <u onClick={loginHandler}>Đăng nhập</u>
          </span>
        </div>
      </>
    );
  };

  const resetPasswordHandler = () => {
    setFormLogin(
      <>
        <div class="title h1 text-center">Đăng ký</div>
        <div class="row item_header-form">
          <div class="title h3">Tên đăng nhập</div>
          <input type="text" placeholder="Enter your username" />
          <button className="btn btn-danger">Reset Password</button>
        </div>

        <div className="row">
          <span>
            Đã có tài khoản <u onClick={loginHandler}>Đăng nhập</u>
          </span>
        </div>
        <div className="row">
          <span>
            Chưa có tài khoản <u onClick={signUpHandler}>Đăng ký</u>
          </span>
        </div>
      </>
    );
  };

 
  return (
    <>
      <div class="header container-fluide">
        <div class="topbar">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <ul class="list-inline topbar_left d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
                  <li>
                    <span class="welcome_text">
                      Chào mừng bạn đến với petco.com.vn
                    </span>
                  </li>
                  <li class="topbar-email">
                    <a href="">Email: petcolu@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-sm-12 col-sm-12 topbar_right">
                <div class="list-inline">
                  <ul>
                    <li>
                      <i class="fas fa-lock"></i>
                      <a onClick={choseLogin}>Đăng nhập</a>
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i>
                      <a href="">Hệ thống cửa hàng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="top-banner d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
          <img
            class="img-responsive"
            src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/img_top_banner.jpg?1656547719204"
            alt=""
          ></img>
        </div>

        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="image logo" />
              </Link>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link">
                  Trang chủ
                </Link>
                <Link to="/dogList" class="nav-link">
                  Blog chó yêu
                </Link>
                <Link to="/shop" class="nav-link">
                  Sản phẩm
                </Link>
                <Link to="/contact" class="nav-link">
                  Liên hệ
                </Link>
                <Link to="/intro" class="nav-link">
                  Giới thiệu
                </Link>
              </div>
              <div className="header_item row ms-auto">
                <div className="input-search col">
                  <button
                    class="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                    onClick={searchHandler}
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </div>

                <div class="shopping-card col">
                  <Link to="cart">
                  <i class="fas fa-shopping-bag"></i>
                  <div class="product-num">{numberCart}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {login && (
        <div class="item_header-popup-wrap">
          <div class="item_header-close">
            <span>
              <i class="fas fa-times" onClick={choseLogin}></i>
            </span>
          </div>
          <div class="item_header-wrap ">
            <div class="container">
              <div class="row">
                <div class="col-12">{formLogin}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {searchIsHandler && (
        <div class="item_header-popup-wrap">
          <div class="item_header-close">
            <span>
              <i class="fas fa-times" onClick={searchHandler}></i>
            </span>
          </div>
          <div class="item_header-wrap text-center">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="title">... Tìm kiếm sản phẩm ...</h2>
                  <div class="item_header-form">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Type keywords here"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Link to={"/shop/"+ searchTerm} onClick={searchHandler}><button class="item_header-btn">
                        <i class="fas fa-search"></i>
                      </button></Link>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};

export default connect(mapStateToProps, null)(Header);

