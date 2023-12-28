import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
import loginimg55 from "../../Assets/Image/login-data2.svg";
import { Link } from "react-router-dom";

const Login = (props: any) => {
  useEffect(() => {
    document.title = props.pageTitle;
  });

  return (
    // <main>
    <div className="login-body">
      {/* <div className="waves"> */}
      <div className="empty">
        <Container className="login-cont">
          <Row className="form-row">
            <Col xl={6} lg={5} md={5} className="left-sec">
              <div className="login-pics">
                <img src={loginimg55} alt="loginimg" />
              </div>
            </Col>
            <Col xl={6} lg={12} md={12} className="login-col">
              <div className="waves">
                <div className="form-outer">
                  <div className="form-inner">
                    <div className="form-head">
                      <h2>Login</h2>
                      <p>Sign into your account</p>
                    </div>
                    <form className="form-start">
                      <input type="text" id="email" placeholder="Email Address" />
                      <input type="password" id="email" placeholder="Password" />
                      <div className="login-remfor">
                        <div className="login-check">
                          <input type="checkbox" id="rem-form" />
                          <label className="me-label"
                          >Remember me</label>
                        </div>
                        <Link to="#">Forgot Password</Link>
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
        </Container>
      </div>
      {/* </div> */}
    </div>
    // </main>
  );
};

export default Login;
