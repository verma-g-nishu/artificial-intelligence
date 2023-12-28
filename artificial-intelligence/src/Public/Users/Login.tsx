import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import _fetch from "../../config/api";


const Login = (props: any) => {

  useEffect(() => {
    document.title = props.pageTitle;
  });

  const Navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    // <main>
    <div className="login-body">
      {/* <div className="waves"> */}
      <div className="empty">
        <div className="coustom_container">
          <Row className="form-row">
            {/* <Col xl={6} lg={5} md={5} className="left-sec">
              <div className="login-pics">
                <img src={loginimg55} alt="loginimg" />
              </div>
            </Col> */}
            <Col xl={12} lg={12} md={12} className="login-col">
              <div className="waves">
                <div className="form-outer">
                  <div className="form-inner">
                    <div className="form-head">
                      <h2>Login</h2>
                      <p>Sign into your account</p>
                    </div>
                    <form className="form-start">
                      <input type="text" id="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                      <div className="hide-pass">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="email"
                          placeholder="Password"
                        />

                        <button type="button" onClick={handleTogglePassword}>
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </button>
                      </div>
                      <div className="login-remfor">
                        <div className="login-check">
                          <input type="checkbox" id="rem-form" />
                          <label className="me-label"
                          >Remember me</label>
                        </div>
                        <Link to="/forgot">Forgot Password</Link>
                      </div>
                      <button type="button" className="log-btn">Login</button>
                      <div className="form-para">
                        <p>
                          Don't have an account? <Link to="/register">Register here</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* </div> */}
    </div>
    // </main>
  );
};

export default Login;
