import "./Login.css";
const Login = (props) => {
  return (
    <div class="login-popup-wrap">
      <div class="login-close">
        <span>
          <i class="fas fa-times" onClick={props.searchHandler}></i>
        </span>
      </div>
      <div class="login-wrap ">
        <div class="container">
          <div class="row box">
            <div class="col-12">
              <h2 class="loginTitle text-center">Login</h2>
              <div class="loginForm">
                <form action="#">
                  <div class="row">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                  </div>
                  <div class="row">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                  </div>
                  <div class="row">
                    <label>Repeat Password</label>
                    <input type="password" placeholder="Repeat Password" />
                  </div>
                </form>
                <div class="text-center">
                  <button className="btn btn-danger">Login</button>
                  <div className="row">
                    <span>
                      Forgot password? <u>Click Here</u>
                    </span>
                  </div>
                  <div className="row">
                    <span>
                      Don't have an account <u>Sign up</u>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;