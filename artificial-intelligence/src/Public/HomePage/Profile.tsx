import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ownerimg from "../../Assets/Image/oner.webp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { titleDescription } from "../../config/Config";
// import { CountryDropdown } from 'react-country-region-selector';
import _fetch from "../../config/api";

import { ColorRing } from "react-loader-spinner";

const Profile = (props: any) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [bio, setBio] = useState('hi! , My name John. I have joined the marketing department as an outreach specialist. ');
  const [bep20Address, setBEP20Address] = useState('');
  const [trc20Address, setTRC20Address] = useState('');
  const [loading, setLoading] = useState(true);
  const [passwordLoading, setPasswordLoading] = useState(true);
  const [walletLoading, setWalletLoading] = useState(true);

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [password3, setPassword3] = useState("");
  const [showPassword3, setShowPassword3] = useState(false);

  const handleTogglePassword3 = () => {
    setShowPassword3(!showPassword3);
  };


  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });



  return (
    <main>
      <div className="profile1-section">
        <div className="coustom_container">
          <Tabs>
            <Row>

              <Col lg={4} md={4}>
                <div className="personal-info">
                  <div className="my-info">
                    <b>My Profile</b>
                  </div>
                  <div className="profile-infos">
                    <div className="name-pic">
                      <div className="outer_profile">


                        <div className="left_profile">
                          <label htmlFor="upload">
                            <div className="emptyPlaceholder text-center">
                              <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z">
                                </path>
                              </svg>
                              <h6 >Upload photo</h6></div>
                            <span><input type="file" id="upload" style={{ display: "none" }} /></span>
                          </label>
                        </div>
                      </div>


                      <div className="name-post">
                        <h6>Name</h6>
                        <h5>{fullName ? fullName : ""}</h5>
                      </div>
                    </div>

                  </div>
                  <div className="bio">
                    <b>About</b>
                    <p>
                      {bio}
                    </p>
                  </div>
                  <TabList>
                    <Tab>Account</Tab>
                    <Tab>Password</Tab>
                    <Tab>Wallet</Tab>
                  </TabList>


                </div>
              </Col>
              <Col lg={8} md={8}>
                <div className="account1-details loader_main">

                  <div className="spinner_bg">
                    {loading &&
                      <div className="color_ring">  <ColorRing
                        visible={true}
                        height="80"
                        width="80"

                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#2b3892', '#2b3892', '#2b3892', '#2b3892', '#2b3892']}
                      /></div>

                    }
                  </div>
                  <TabPanel>


                    <div className="accout-seting">
                      <h2>Account Setting</h2>
                      <div className="form-part">

                        <Col md={6}>
                          <div className="form">
                            <label className="form-label">First Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="First Name"
                              onChange={(e) => setFirstName(e.target.value)}
                              value={firstName}
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
                              onChange={(e) => setLastName(e.target.value)}
                              value={lastName}
                            />
                          </div>
                        </Col>
                      </div>
                      <div className="form-part">
                        <Col md={6}>
                          <div className="form">
                            <label className="form-label">Country</label>
                            {/* <CountryDropdown classes="form-control" value="" /> */}
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="form">
                            <label className="form-label">Email </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="@gmail.com"
                              disabled
                              value={email}
                            />
                          </div>
                        </Col>
                      </div>
                      <div className="bottom_sec">
                        <Col lg={12}>
                          <div className="form">
                            <label className="form-label">Phone </label>
                            <input
                              className="form-control"
                              type="number"
                              placeholder="0000000000"
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="form mb-0">
                            <label className="form-label">Bio </label>
                            <textarea placeholder='Address' rows={5} id='address' onChange={(e: any) => setAddress(e.target.value)} value={address} ></textarea>
                          </div>
                        </Col>

                      </div>


                      <div className="">
                        <Col lg={6}>
                          <div className="acct-follow">
                            <button className="button_style">Update</button>
                            <button className="button_style btn-cancel">Cancel</button>
                          </div>
                        </Col>

                      </div>



                    </div>

                  </TabPanel>
                  <TabPanel>


                    <div className="accout-seting">
                      <h2>Password Setting</h2>

                      <div className="form-part2 ">
                        <Col lg="12">
                          <label>Old Password</label>
                          <div className="hide-pass">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="pass"
                              placeholder="Password"
                            />

                            <button
                              type="button"
                              onClick={handleTogglePassword}
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </button>
                          </div>
                        </Col>

                        <Col lg="12">
                          <label>New Password</label>
                          <div className="hide-pass">
                            <input
                              type={showPassword2 ? "text" : "password2"}
                              value={password2}
                              onChange={(e) => setPassword2(e.target.value)}
                              id="pass"
                              placeholder="Password"
                            />

                            <button
                              type="button"
                              onClick={handleTogglePassword2}
                            >
                              {showPassword2 ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </button>
                          </div>
                        </Col>

                        <Col lg="12">
                          <label>Confirm New Password</label>
                          <div className="hide-pass">
                            <input
                              type={showPassword3 ? "text" : "password3"}
                              value={password3}
                              onChange={(e) => setPassword3(e.target.value)}
                              id="pass"
                              placeholder="Password"
                            />

                            <button
                              type="button"
                              onClick={handleTogglePassword3}
                            >
                              {showPassword3 ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </button>
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div className="acct-follow">
                            <button className="button_style" >Update</button>
                            <button className="button_style btn-cancel">Cancel</button>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>


                    <div className="accout-seting">
                      <h2>Wallet</h2>
                      <div className="form">
                        <label className="form-label">BEP20  </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="BEP20"
                          onChange={(e) => setBEP20Address(e.target.value)}
                          value={bep20Address}
                        />

                      </div>
                      <div className="form">
                        <label className="form-label">TRC20  </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="TRC20"
                          onChange={(e) => setTRC20Address(e.target.value)}
                          value={trc20Address}
                        /></div>
                      <Col lg={6}>
                        <div className="acct-follow">
                          {!bep20Address && !trc20Address ? <>

                            <button className="button_style">Update</button>
                            <button className="button_style btn-cancel">Cancel</button>
                          </>
                            :
                            ""
                          }

                        </div>
                      </Col>
                      {/* <div className="form-part3">
                        <Col lg={12}>
                          <div className="authorize">
                            <div className="author-head">
                              <h4>Add to your mobile device</h4>
                            </div>
                            <p>
                              In Google Authenticator on your Mobile Device, tap
                              (+) and then scan the QR Code below or enter the
                              setup key
                            </p>
                            <div className="scan_sec row">
                              <div className="store-pic col-lg-4">
                                <img src={scanqrimg} alt="scan" />
                              </div>
                              <div className="link1-copy col-lg-8">
                                <p className="gogle-key">
                                  Your Google Authenticator key
                                </p>

                                <div className="icon1-copy">
                                  <input
                                    type="text"
                                    value="https://web.gtccapital.com/auth/signup/"
                                    disabled
                                  ></input>
                                  <FileCopyIcon />
                                </div>
                              </div>
                            </div>



                          </div>
                        </Col>
                      </div> */}
                    </div>
                  </TabPanel>

                </div>
              </Col>

            </Row>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Profile;
