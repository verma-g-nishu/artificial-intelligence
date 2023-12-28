import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { titleDescription } from "../../config/Config";
import _fetch from "../../config/api";

import { ColorRing } from "react-loader-spinner";


const Deposit = (props: any) => {
  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });

  const [wallets, setWallets] = useState({ bep20: "", trc20: "" });
  const [BEP20, setBEP20] = useState('');
  const [barcodeValue, setBarCodeValue] = useState(wallets?.bep20);
  const [walletHeding, setWalletHeding] = useState("USDT - BEP20 Deposit");
  const [barCodeHeding, setBarCodeheading] = useState('USDT - BEP20');
  const [trxType, setTrxType] = useState('bep20');
  const [countHit, setCountHit] = useState(0);
  const [fundValues, setFundValues] = useState([]);
  const [loading, setLoading] = useState(true);











  return (
    <main>
      <div className="deposit-section">


        <div className="coustom_container">
          <div className="deposit_inner loader_main">

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
            <Row className="first_row">
              <Col lg={6} md={6} className="text-center">
                <div className="deposit-scanner">


                  <p>Send only {barCodeHeding} to your address</p>

                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className="deposit-all-data ">
                  <h5>{walletHeding}</h5>
                  <div className="link-copy">
                    <input type='text' value={BEP20 ? BEP20 : wallets?.bep20} disabled></input>
                    <div className="icon-copy">
                      <FileCopyIcon  />
                    </div>
                  </div>

                  <p>
                    Sending wrong tokens or to the wrong <br />network, will result in a
                    loss of fund
                  </p>
                  <div className="deposit-links">
                    <Link to="#" className="button_style" >USDT - BEP20</Link>
                    <Link to="#" className="button_style" > USDT - TRC20 </Link>
                  </div>

                </div>
              </Col>
            </Row>

            {/* table section */}
            <div className="table_section">

              <div className="scrolling_table">
                <div className="scroll_under">
                  <Table className="support_table">
                    <thead>
                      <tr className="table_heading_row">
                        <th className="table_heading">#</th>
                        <th className="table_heading">Amount</th>
                        <th className="table_heading">Scan</th>
                        <th className="table_heading">Date</th>
                      </tr>
                    </thead>
                    <tbody>

                      {fundValues?.map((item: any, index: any) => {
                        return (
                          <>
                            <tr className="table_data_row">
                              <td className="table_data"><div className="pic_text">{index + 1}</div></td>
                              <td className="table_data payment_fee">{item?.amount}</td>
                              <td className="table_data">
                                <Link to={item?.blockscan_url} target="_blank"> View </Link>
                              </td>
                              <td className="table_data">data</td>
                            </tr>
                          </>
                        )
                      })}

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

export default Deposit;
