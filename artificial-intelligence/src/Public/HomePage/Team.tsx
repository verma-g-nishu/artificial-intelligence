import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Row, Col } from "react-bootstrap";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EmailIcon from "@mui/icons-material/Email";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Table from "react-bootstrap/Table";
import SearchIcon from "@mui/icons-material/Search";
import ReplayIcon from "@mui/icons-material/Replay";

const Team = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });
  return (
    <main>
      <div className="team-section">
        <div className="coustom_container">
          <div className="team-outer">
            <Tabs>
              <Row>
                <Col xl={12}>
                  <div className="team-inner">
                    <Row className="team_row">
                      <Col xl={3} md={4} lg={4} >
                        <div className="team-sponser">
                          <div className="sponser-head">
                            <h6 className="mb-2">MY SPONSOR</h6>
                          </div>
                          <div className="sponser-content">
                            <p>
                              <AccountCircleRoundedIcon /> KING MAKER
                            </p>
                            <p>
                              <EmailIcon />
                              @gmail.com
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xl={9} md={8} lg={8} className="team_col">
                        <div className="team-head-content">
                          <div className="team-search">
                            <form className="serch-form">
                              <input
                                type="text"
                                id="names"
                                placeholder="Search by name"
                              ></input>
                              <select className="form-control level">
                                <option value="0">Level</option>
                                <option value="1">All</option>
                                <option value="2">Level 1</option>
                                <option value="3">Level 2</option>
                                <option value="4">Level 3</option>
                              </select>
                              <select className="form-control level">
                                <option value="0">Rank</option>
                                <option value="1">All</option>
                                <option value="2">Level</option>
                                <option value="3">Level</option>
                                <option value="4">Level</option>
                              </select>
                            </form>
                            <div className="form-btn">
                              <button className="searchicons">
                                <SearchIcon />
                              </button>
                              <button className="searchicons">
                                <ReplayIcon />
                              </button>
                            </div>
                          </div>
                          <div className="team-tabs">
                            <TabList>
                              <Tab>TABLE VIEW</Tab>
                              <Tab>TREE VIEW</Tab>
                            </TabList>
                          </div>

                        </div>
                      </Col>
                    </Row>
                    <div className="panel">
                      <TabPanel>
                        <div className="table_section">
                          <div className="scrolling_table">
                            <div className="scroll_under">
                              <Table className="support_table">
                                <thead>
                                  <tr className="table_heading_row">
                                    <th className="table_heading"> S.NO</th>
                                    <th className="table_heading">Name</th>

                                    <th className="table_heading">Email</th>
                                    <th className="table_heading">Country</th>
                                    <th className="table_heading">Level</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">

                                        1
                                      </div>
                                    </td>
                                    <td className="table_data">John</td>

                                    <td className="table_data">john123@gmail.com</td>
                                    <td className="table_data">Canada</td>
                                    <td className="table_data payment_fee">
                                      1
                                    </td>
                                  </tr>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">

                                        2
                                      </div>
                                    </td>
                                    <td className="table_data">Allen</td>

                                    <td className="table_data">allen812@gmail.com</td>
                                    <td className="table_data">Paris</td>
                                    <td className="table_data payment_fee">
                                      3
                                    </td>
                                  </tr>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">
                                        3
                                      </div>
                                    </td>
                                    <td className="table_data">Tiana</td>

                                    <td className="table_data">tiana76@gmail.com</td>
                                    <td className="table_data">London</td>
                                    <td className="table_data payment_fee">
                                      5
                                    </td>
                                  </tr>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">

                                        4
                                      </div>
                                    </td>
                                    <td className="table_data">Edden Jayson</td>

                                    <td className="table_data">eddenjy@gmail.com</td>
                                    <td className="table_data">America</td>
                                    <td className="table_data payment_fee">
                                      2
                                    </td>
                                  </tr>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">
                                        5
                                      </div>
                                    </td>
                                    <td className="table_data">John Smith</td>

                                    <td className="table_data">john009@gmail.com</td>
                                    <td className="table_data">Turkey</td>
                                    <td className="table_data payment_fee">
                                      4
                                    </td>
                                  </tr>
                                  <tr className="table_data_row">
                                    <td className="table_data">
                                      <div className="pic_text">
                                        6
                                      </div>
                                    </td>
                                    <td className="table_data">Maria</td>

                                    <td className="table_data">maria999@gmail.com</td>
                                    <td className="table_data">England</td>
                                    <td className="table_data payment_fee">
                                      6
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card mt-5">
                              <div className="card-body">
                                <h6 >
                                  Comming soon
                                </h6>

                              </div>

                            </div>
                          </div>
                        </div>

                      </TabPanel>
                    </div>
                  </div>
                </Col>
              </Row>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
