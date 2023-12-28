import { Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import ownerimg from "./Assets/Image/oner.webp";
import { titleDescription } from "./config/Config";

const Profile = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  })
  return (
    <main>
      <div className="profile-section">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="personal-info">
                <div className="my-info">
                  <b>My Profile</b>
                </div>
                <div className="profile-infos">
                  <div className="owner-pic">
                    <img src={ownerimg} alt="owner" />
                  </div>
                  <div className="name-post">
                    <h5>name</h5>
                    <p>DESIGNER</p>
                  </div>
                </div>
                <div className="bio">
                  <label className="form-label">Bio</label>
                  <textarea className="form-control" rows={4}>

                  </textarea>
                </div>
                <div className="form">
                  <label className="form-label">Email-Address</label>
                  <input
                    className="form-control"
                    placeholder="email@.com"
                    disabled
                  />
                </div>
                <div className="form">
                  <label className="form-label">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value="password"
                  />
                </div>
                <div className="form">
                  <label className="form-label">Website</label>
                  <input
                    className="form-control"
                    placeholder="http://.com"
                  />
                </div>
                <div className="foot-info">
                  <button className="down-btn">Save</button>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="account-details">
                <div className="account-head">
                  <b>Edit Profile</b>
                </div>
                <Row>
                  <Col md={6}>
                    <div className="form">
                      <label className="form-label">First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form">
                      <label className="form-label">Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form">
                      <label className="form-label">Address</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Home Address"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form">
                      <label className="form-label">Company</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Company"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form">
                      <label className="form-label">Username</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form">
                      <label className="form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                  </Col>
                  <Col sm={6} md={4}>
                    <div className="form">
                      <label className="form-label">City</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="City"
                      />
                    </div>
                  </Col>
                  <Col sm={6} md={3}>
                    <div className="form">
                      <label className="form-label">Postal Code</label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="ZIP Code"
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="form">
                      <label className="form-label">Country</label>
                      <select className="form-control btn-square">
                        <option value="0">--Select--</option>
                        <option value="1">Germany</option>
                        <option value="2">Canada</option>
                        <option value="3">Usa</option>
                        <option value="4">Aus</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={12}>
                    <label className="form-label">About Me</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Enter About your description"
                    ></textarea>
                  </Col>
                </Row>
                <div className="account-foot">
                  <button className="up-btn" type="submit">
                    Update Profile
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Profile;
