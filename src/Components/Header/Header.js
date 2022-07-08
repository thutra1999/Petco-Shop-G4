import './Header.css';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo/logo.png';
import { connect } from 'react-redux';
import AuthContext from '../../usecontact/index';

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const accountAdmin = {
    username: 'admin',
    password: 'admin',
  };
  const [login, setLogin] = useState(false);
  const [formLogin, setFormLogin] = useState();
  const [searchIsHandler, setSearchIsHandler] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [numberCart, setNumberCart] = useState(null);
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const loginChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setAccount(...(account[name] = value));
    console.log(account);
  };
  useEffect(() => {
    setNumberCart(props.numberCart);
  }, [props.numberCart]);

  const searchHandler = () => {
    setSearchIsHandler((previous) => !previous);
    setSearchTerm('');
  };

  const choseLogin = () => {
    setAccount({
      username: '',
      password: '',
    });
    setLogin((previous) => !previous);
    loginHandler();
  };
  const loginNow = () => {
    if (
      account.username === accountAdmin.username &&
      account.password === accountAdmin.password
    ) {
      authCtx.onLogin('admin');
      setLogin(false);
    } else {
      authCtx.onLogin('user');
      setLogin(false);
    }
  };
  const loginHandler = () => {
    setFormLogin(
      <>
        <div className="title h1 text-center">Đăng nhập</div>
        <div className="row item_header-form">
          <div className="title h3">Tên đăng nhập</div>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            onChange={(e) => loginChangeHandler(e)}
          />
          <div className="title h3">Mật khẩu</div>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => loginChangeHandler(e)}
          />
          <button className="btn btn-danger" onClick={loginNow}>
            Login
          </button>
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
        <div className="title h1 text-center">Đăng ký tài khoản</div>
        <div className="row item_header-form">
          <div className="title h3">Tên đăng nhập</div>
          <input type="text" placeholder="Enter your username" />
          <div className="title h3">Mật khẩu</div>
          <input type="password" placeholder="Enter your password" />
          <div className="title h3">Xác nhận mật khẩu</div>
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
        <div className="title h1 text-center">Lấy lại mật khẩu</div>
        <div className="row item_header-form">
          <div className="title h3">Tên đăng nhập</div>
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
  const logoutHandler = () => {
    authCtx.onLogout();
  };

  return (
    <>
      <div className="header container-fluide">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <ul className="list-inline topbar_left d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
                  <li>
                    <span className="welcome_text">
                      Chào mừng bạn đến với petco.com.vn
                    </span>
                  </li>
                  <li className="topbar-email">
                    <a href="">Email: petcolu@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-sm-12 topbar_right">
                <div className="list-inline">
                  <ul>
                    {authCtx.isLoggedIn ? (
                      <li>
                        <i className="fas fa-lock"></i>
                        <a onClick={logoutHandler}>Đăng xuất</a>
                      </li>
                    ) : (
                      <li>
                        <i className="fas fa-lock"></i>
                        <a onClick={choseLogin}>Đăng nhập</a>
                      </li>
                    )}
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="">Hệ thống cửa hàng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-banner d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
          <img
            className="img-responsive"
            src="http://bizweb.dktcdn.net/100/375/956/themes/750643/assets/img_top_banner.jpg?1656547719204"
            alt=""
          ></img>
        </div>

        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="../../img/logo/logo.png" alt="image logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">
                  Trang chủ
                </Link>
                <Link to="/dogList" className="nav-link">
                  Blog chó yêu
                </Link>
                <Link to="/shop" className="nav-link">
                  Sản phẩm
                </Link>
                <Link to="/contact" className="nav-link">
                  Liên hệ
                </Link>
                <Link to="/intro" className="nav-link">
                  Giới thiệu
                </Link>
              </div>
              <div className="header_item row ms-auto">
                <div className="input-search col">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                    onClick={searchHandler}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>

                <div className="shopping-card col">
                  <Link to="cart">
                    <i className="fas fa-shopping-bag"></i>
                    <div className="product-num">{numberCart}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {login && (
        <div className="item_header-popup-wrap">
          <div className="item_header-close">
            <span>
              <i className="fas fa-times" onClick={choseLogin}></i>
            </span>
          </div>
          <div className="item_header-wrap ">
            <div className="container">
              <div className="row">
                <div className="col-12">{formLogin}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {searchIsHandler && (
        <div className="item_header-popup-wrap">
          <div className="item_header-close">
            <span>
              <i className="fas fa-times" onClick={searchHandler}></i>
            </span>
          </div>
          <div className="item_header-wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">... Tìm kiếm sản phẩm ...</h2>
                  <div className="item_header-form">
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Type keywords here"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Link to={'/shop/' + searchTerm} onClick={searchHandler}>
                        <button className="item_header-btn">
                          <i className="fas fa-search"></i>
                        </button>
                      </Link>
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
