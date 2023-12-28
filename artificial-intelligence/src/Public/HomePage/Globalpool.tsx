import React, { useEffect } from "react";
import { titleDescription } from "../../config/Config";
import { Row, Col } from "react-bootstrap";
import peopleone from "../../Assets/Image/global11.png";
import Table from "react-bootstrap/Table";
import sppari from "../../Assets/Image/sapphire_25.webp";
import diamond from "../../Assets/Image/diamond.webp";
import crown from "../../Assets/Image/crown_diamond.webp";
import vicep from "../../Assets/Image/vice_president.webp";
import globpic from "../../Assets/Image/profit.png";

const Globalpool = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });

  return (
    <main>
      <div className="globalpool-section">
        <div className="coustom_container">
          <div className="globalpool-inner">
            <div className="globalpool-head">
              <h4>GLOBAL LIFETIME POOL</h4>
            </div>

            <div className="cards_row">
              <div className="row cards-row2">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card_inner">
                    <div className="card-body">
                      <div>
                        <p className="card-text">Current pool</p>
                        <h6 className="card-title">-</h6>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card_inner">
                    <div className="card-body">
                      <div>
                        <p className="card-text">Global Lifetime Pool</p>
                        <h6 className="card-title">$0.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card_inner">
                    <div className="card-body">
                      <div>
                        <p className="card-text">November'23</p>
                        <h6 className="card-title">$0/$0</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card_inner">
                    <div className="card-body">
                      <div>
                        <p className="card-text">October'23</p>
                        <h6 className="card-title">$0/$0</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Row>
              <Col xl={7} lg={8}>
                <div className="global-selfbuss">
                  <div className="global-max">
                    <p>Max. Self Business : $0</p>
                    <span>
                      <img src={peopleone} alt="" />{" "}
                    </span>
                  </div>
                  <div className="worldpool">
                    <div className="worldglobal-pool">
                      <h6>Pool 1 -</h6>
                      {/* <p>-</p> */}
                      <p>10,000</p>
                    </div>
                    <div className="progressing">
                      <p>856</p>
                    </div>
                  </div>
                  <div className="worldpool">
                    <div className="worldglobal-pool">
                      <h6>Pool 2 -</h6>
                      {/* <p>-</p> */}
                      <p>25,000</p>
                    </div>
                    <div className="progressing">
                      <p>447</p>
                    </div>
                  </div>
                  <div className="worldpool">
                    <div className="worldglobal-pool">
                      <h6>Pool 3 -</h6>
                      {/* <p>-</p> */}
                      <p>75,000</p>
                    </div>
                    <div className="progressing">
                      <p>179</p>
                    </div>
                  </div>
                  <div className="worldpool">
                    <div className="worldglobal-pool">
                      <h6>Pool 4 -</h6>
                      {/* <p>-</p> */}
                      <p>250,000</p>
                    </div>
                    <div className="progressing">
                      <p>84</p>
                    </div>
                  </div>
                  <div className="worldpool">
                    <div className="worldglobal-pool">
                      <h6>Pool 5 -</h6>

                      {/* <p>-</p> */}
                      <p>500,000</p>
                    </div>
                    <div className="progressing">
                      <p>15</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={5} lg={4}>
                <div className="globalpool-pics">
                  <img src={globpic} alt="" />
                </div>
              </Col>
            </Row>

            <div className="table_section">
              <div className="scrolling_table">
                <div className="scroll_under">
                  <Table className="support_table">
                    <thead>
                      <tr className="table_heading_row">
                        <th className="table_heading">Month</th>
                        <th className="table_heading">Pool 2.5%</th>
                        <th className="table_heading">Pool 5%</th>
                        <th className="table_heading">Pool 7.5%</th>
                        <th className="table_heading">Pool 10%</th>
                        <th className="table_heading">Generated</th>
                        <th className="table_heading">credited</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_data_row">
                        <td className="table_data"></td>
                        <td className="table_data">
                          {" "}
                          <div className="pic_text">
                            <img src={sppari} alt="bitcoin_pic" />
                            Sapphire 25 & above
                          </div>
                        </td>

                        <td className="table_data">
                          {" "}
                          <div className="pic_text">
                            <img src={diamond} alt="bitcoin_pic" />
                            Diamond & above
                          </div>
                        </td>
                        <td className="table_data">
                          {" "}
                          <div className="pic_text">
                            <img src={crown} alt="bitcoin_pic" />
                            Crown Diamond & above
                          </div>
                        </td>
                        <td className="table_data">
                          {" "}
                          <div className="pic_text">
                            <img src={vicep} alt="bitcoin_pic" />
                            Vice President & above
                          </div>
                        </td>
                        <td className="table_data payment_fee"></td>
                        <td className="table_data payment_fee"></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Globalpool;
