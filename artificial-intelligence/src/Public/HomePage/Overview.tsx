import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import teams1 from "../../Assets/Image/over-team1.jpeg";
import teams2 from "../../Assets/Image/frontlime.png";
import teams3 from "../../Assets/Image/today-bussiness.png";

const Overview = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });
  return (
    <main>
      <div className="overview-section">
        <div className="coustom_container">
          <div className="overview-outer">
            <Row>
              <Col lg={12}>
                <div className="overview-head">
                  <h4>OVERVIEW</h4>
                </div>
              </Col>
              <Col lg={8} md={8}>
                <div className="table_section">
                  <div className="scrolling_table">
                    <div className="scroll_under">
                      <div className="table-overview">
                        <h5>TOP RANK HOLDER</h5>
                      </div>
                      <Table className="support_table">

                        <thead>
                          <tr className="table_heading_row">
                            <th className="table_heading">Name</th>
                            <th className="table_heading">Country</th>
                            <th className="table_heading">Level</th>
                            <th className="table_heading">Rank</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">king makerthree</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">2</td>
                            <td className="table_data">Executive</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">king makerfour</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">3</td>
                            <td className="table_data">Executive</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">TEAM INDIA</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">4</td>
                            <td className="table_data">Executive</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">SURINDER SINGH</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">5</td>
                            <td className="table_data">Executive</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">king makertwo</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">1</td>
                            <td className="table_data">Executive</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4}>
                <div className="overview-details">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="overview-teams">
                        <div className="overpicview">
                          <img src={teams1} alt="team" />
                        </div>
                        <div className="overviewpic-content">
                          <h6>Team</h6>
                          <h5>88</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="overview-teams">
                      <div className="overpicview">
                        <img src={teams2} alt="team" />
                      </div>
                      <div className="overviewpic-content">
                        <h6>Frontlines</h6>
                        <h5>88</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="overview-teams">
                      <div className="overpicview">
                        <img src={teams3} alt="team" />
                      </div>
                      <div className="overviewpic-content">
                        <h6>Today's Business</h6>
                        <h5>88</h5>
                      </div>
                    </div>
                  </div>

                </div>
              </Col>
              <Col lg={6}>
                <div className="table_section">
                  <div className="scrolling_table">
                    <div className="scroll_under highers">
                      <div className="table-overview">
                        <h5>TOP COUNTRIES</h5>
                      </div>
                      <Table className="support_table">
                        <thead>
                          <tr className="table_heading_row">
                            <th className="table_heading"> S.No</th>
                            <th className="table_heading">Country</th>
                            <th className="table_heading">Business</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">1</div>
                            </td>
                            <td className="table_data">India</td>
                            <td className="table_data payment_fee">$2,608</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">2</div>
                            </td>
                            <td className="table_data">England</td>
                            <td className="table_data payment_fee">$0</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">3</div>
                            </td>
                            <td className="table_data">Nepal</td>
                            <td className="table_data payment_fee">$0</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">4</div>
                            </td>
                            <td className="table_data">Portugal</td>
                            <td className="table_data payment_fee">$0</td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">5</div>
                            </td>
                            <td className="table_data">Germany</td>
                            <td className="table_data payment_fee">$0</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="overview-business">
                  <div className="overview-total">
                    <div className="total-buss">Total Business</div>
                    <div className="total-dolar"><span>$2,608</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Yesterday</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">last7 days</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Current Month(Dec)</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Last Month(Nov)</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="overview-business">
                  <div className="overview-total">
                    <div className="total-buss">Total Income</div>
                    <div className="total-dolar">$44.16</div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Uni Level</div>
                    <div className="total-dolar1"><span>$44.16</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Rank Royalty</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Global Lifetime Pool</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                  <div className="overview-total1">
                    <div className="total-buss1">Trading Profit</div>
                    <div className="total-dolar1"><span>$0</span></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;
