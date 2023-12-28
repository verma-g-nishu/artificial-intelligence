import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import btc_img from "../../Assets/Image/btc_img.png";

const Trading = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });

  return (
    <main>
      <div className="trading-section">
        <div className="coustom_container">
          <div className="trading-outer">
            <Row>
              <Col lg={12}>
                <div className="trading-head">
                  <h4>TRADING PROFIT</h4>
                </div>
              </Col>
              <Col lg={12}>
                <div className="table_section">
                  <div className="scrolling_table">
                    <div className="scroll_under">
                      <Table className="support_table">
                        <thead>
                          <tr className="table_heading_row">
                            <th className="table_heading"> Currency</th>
                            <th className="table_heading">Code</th>
                            <th className="table_heading">Payment Fee</th>
                            <th className="table_heading">Confirms</th>
                            <th className="table_heading">To USD</th>
                            <th className="table_heading">To BTC</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                Bitcoin
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                USDT
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                METIC
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                USDT
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                BITCOIN
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                          <tr className="table_data_row">
                            <td className="table_data">
                              <div className="pic_text">
                                <img src={btc_img} alt="bitcoin_pic" />
                                METIC
                              </div>
                            </td>
                            <td className="table_data">BTC</td>
                            <td className="table_data payment_fee">0.5%</td>
                            <td className="table_data">2</td>
                            <td className="table_data">$25961.08</td>
                            <td className="table_data payment_fee">
                              1.00000000
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
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

export default Trading;
