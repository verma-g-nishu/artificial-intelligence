import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { titleDescription } from '../../config/Config';
import loginimg55 from "../../Assets/Image/login-data2.svg";
const Register = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  })
  return (
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
                      <h2>Register</h2>
                      <p>Create an account</p>
                    </div>
                    <form className="form-start">
                      <input type="text" id="email" placeholder="Full Name" />
                      <input type="text" id="email" placeholder="Email Address" />
                      <input type="password" id="email" placeholder="Password" />
                      <div className="login-remfor">
                        <div className="login-check">
                          <input type="checkbox" id="rem-form" />
                          <label className="me-label"
                          >I agree to the terms of service</label>
                        </div>
                      </div>
                      <button type="button" className="log-btn">Register</button>
                      <div className="form-para">
                        <p>
                          Alrready a member? <Link to="/login">Login here</Link>
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
    </div>
    // </div>
  )
}

export default Register;