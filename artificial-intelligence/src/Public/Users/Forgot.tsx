import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Row, Col } from "react-bootstrap";


const Forgot = (props: any) => {
  useEffect(() => {
    document.title = props.pageTitle;
  });
  return (
    <div className="login-body">
      <div className="empty">
        <div className="coustom_container">
          <Row className="form-row">
            {/* <Col xl={6} lg={5} md={5} className="left-sec">
              <div className="login-pics">
                <img src={loginimg55} alt="loginimg" />
              </div>
            </Col> */}
            <Col xl={12} lg={12} md={12}>
              <div className="waves">
                <div className="form-outer">
                  <div className="form-inner">
                    <div className="form-head">
                      <h2>Forgot Password</h2>
                      <p>Fill the details below</p>
                    </div>
                    <form className="form-start">
                      <input type="text" id="email" placeholder=" Enter Email ID" />
                      <input type="text" id="email" placeholder="Enter User ID" />

                      <button type="button" className="log-btn">Submit</button>
                      <div className="form-para">
                        <p>
                          Still no account? <Link to="/register">Create New account</Link>
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
    </div>
  )
}

export default Forgot