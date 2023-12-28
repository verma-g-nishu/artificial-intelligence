import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { titleDescription } from "../../config/Config";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Register = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });


  const { sponser } = useParams();

  const Navigate = useNavigate();

  const [refferalID, setRefferalID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswords = () => {
    setShowPasswords(!showPasswords);
  };


  useEffect(() => {
    if (sponser != null) {
      setRefferalID(sponser);
    }
  }, []);


  return (
    <div className="login-body register-pg">
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
                <div className="form-outer exchange">
                  <div className="form-inner">
                    <div className="form-head">
                      <h2>Register</h2>
                      <p>Create an account</p>
                    </div>
                    <form className="form-start">
                      <input type="text" id="email" placeholder="Refferal ID" onChange={(e) => setRefferalID(e.target.value)} value={refferalID} />
                      <input type="text" id="email" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                      <input
                        type="text"
                        id="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <input
                        type="number"
                        id="email"
                        placeholder="Phone Number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                      />

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
                      <div className="hide-pass">
                        <input
                          type={showPasswords ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          id="email"
                          placeholder="Confirm Password"
                        />

                        <button type="button" onClick={handleTogglePasswords}>
                          {showPasswords ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </button>
                      </div>
                      <div className="login-remfor">
                        <div className="login-check">
                          <input type="checkbox" id="rem-form" />
                          <label className="me-label">
                            I agree to the terms of service
                          </label>
                        </div>
                      </div>
                      <button type="button" className="log-btn" >
                        Register
                      </button>
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
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Register;
