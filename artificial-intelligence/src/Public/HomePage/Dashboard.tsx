import React, { useEffect, useState } from 'react';
import dollar_image from '../../Assets/Image/dollar_image.png';

import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import ProgressBar from 'react-bootstrap/ProgressBar';

import profit3 from '../../Assets/Image/profit3.png';
import profit4 from '../../Assets/Image/profit4.png';
import profit5 from '../../Assets/Image/profit5.png';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import user_pf from '../../Assets/Image/user_pf.png';
import portfolio from '../../Assets/Image/portfolio.png';
import btc_img from '../../Assets/Image/btc_img.png';
import eth from '../../Assets/Image/eth.webp';
import xrp from '../../Assets/Image/xrp.webp';
import income from '../../Assets/Image/income.png';
import usd from '../../Assets/Image/usd.png';
import bnb_img from '../../Assets/Image/bnb_img.png';
import profit2 from '../../Assets/Image/profit2.png';
import wallet from '../../Assets/Image/wallet.png';
import hour24 from '../../Assets/Image/hour24.png';
import { titleDescription } from '../../config/Config';
import { Chart } from "react-google-charts";
import Table from 'react-bootstrap/Table';
import banner from '../../Assets/Image/banner.png';
import _fetch from '../../config/api';
import { useLocation, useNavigate } from 'react-router-dom';
// import QRCode from 'qrcode.react';
import scan_code from '../../Assets/Image/scan_code.png';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
const Dashboard = (props: any) => {

  useEffect(() => {
    document.title = `${props.pageTitle} | ${titleDescription}`;
  });
  const [sponsorId, setSponsorId] = useState('');
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  let location = useLocation();
  const navigate = useNavigate();
  const auth = localStorage.getItem('auth');


  const data1 = [
    ["Task", "Hours per Day"],
    ["XRP", 11],
    ["Bitcoin", 2],
    ["Cardano", 2],
    ["Etherium", 2],

  ];

  const options = {
    title: "Current Positions",
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Trading Profit", 11],
    ["Uni-Level", 2],
    ["Rank Royality", 2],
    ["Global Pool", 2],
  ];
  const options1 = {
    title: "Trading",
    pieHole: 0.4,
    is3D: false,
  };

  const now = 60;

  // const [info, setInfo] = useState([]);
  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  // const getUserInfo = async () => {
  //   let res = await _fetch(`${api_url}user/userInfo/`, "GET", {})
  //   if (res?.status === 'success') {
  //     setInfo(res?.data?.data);
  //   }
  // }

  return (
    <>
      <main>
        <div>
          <div className="coustom_container">
            <div className="main_inner_sec">
              <div className="header-left">
                <div className="link-copy ">
                  <input type='text' value="" disabled></input>
                  <div className="icon-copy">
                    <FileCopyIcon />
                  </div>
                </div>
                <div className="icons_im">
                  <img src={scan_code} className="scan_code" alt="scan" onClick={onOpenModal} />




                </div>
              </div>
              <div className="banner-section-top">
                <img src={banner} className="banner-img" alt="Covido logo" />
              </div>

              {/* second section */}
              <div className='cards_row'>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card_inner" >

                      <div className="card-body">
                        <div>
                          <img src={income} className="banner-img" alt="Covido logo" />
                        </div>
                        <div>
                          <h6 className="card-title">Total Income</h6>
                          <p className="card-text">$55.67</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card_inner" >


                      <div className="card-body">
                        <div><img src={usd} className="banner-img" alt="Covido logo" /></div>
                        <div>
                          <h6 className="card-title">Available eUSD</h6>
                          <p className="card-text">$55.67</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card_inner" >

                      <div className="card-body">
                        <div>  <img src={profit2} className="banner-img" alt="Covido logo" /></div>

                        <div>
                          <h6 className="card-title">Available Profit</h6>
                          <p className="card-text">$55.67</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card_inner" >


                      <div className="card-body">
                        <div> <img src={wallet} className="banner-img" alt="Covido logo" /></div>
                        <div><h6 className="card-title">Rebuy Wallet</h6>
                          <p className="card-text">$55.67</p></div>



                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* Rank Royality */}
              <div className="rank_royality">
                <div className="row">

                  <div className="col-lg-4 ">
                    <h4>
                      John Smith
                    </h4>
                    <div className="card rank_card mb-3">
                      <div className="card-body">
                        <div className="executive_icon">
                          <img src={user_pf} className="banner-img" alt="Covido logo" />
                        </div>
                        <div className="current_rank">
                          <h6 className="card-title">Current Rank</h6>
                          <p className="card-text">Executive</p>
                        </div>
                      </div>
                    </div>
                    <div className="card rank_card">
                      <div className="card-body">
                        <div className="executive_icon">
                          <img src={dollar_image} className="banner-img" alt="Covido logo" />
                        </div>
                        <div className="current_rank">
                          <h6 className="card-title">Next Rank</h6>
                          <p className="card-text">Jade</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="right_rank_sec">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <div className="rank_amount">
                                <h6>Rank Royality</h6>
                                <h6>$0</h6>
                              </div>
                              <div className="progress_sec">
                                <p>Completed</p>
                                <ProgressBar now={now} label={`${now}%`} />
                              </div>
                              <div className="rule">
                                <p><span>40%</span> Rule</p>

                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-body">
                              <div className="inner_data_values">
                                <div><h6>King Maker</h6></div>
                                <div className="item-sec">
                                  <p>800</p>
                                  <p>Max 800</p>
                                </div>

                              </div>
                              <div className="inner_data_values">
                                <div><h6>Leg 2</h6></div>
                                <div className="item-sec">
                                  <p>0</p>
                                  <p>Max 800</p>
                                </div>

                              </div>
                              <div className="inner_data_values">
                                <div><h6>Other</h6></div>
                                <div className="item-sec">
                                  <p>0</p>
                                  {/* <p>Max 800</p> */}
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>
                </div>
              </div>

              {/* charts */}
              <div className="chart_sections">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <Chart
                          chartType="PieChart"
                          data={data}
                          options={options}
                          width={"100%"}
                          height={"400px"}
                          className='chart_style'
                        />
                      </div></div>

                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">


                        <Chart
                          chartType="PieChart"
                          width="100%"
                          height="400px"
                          data={data1}
                          options={options1}
                        />  </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* profit cards  */}
              <div className="profit_cards">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card card_inner" >

                      <div className="card-body">
                        <div className="profit_head">
                          <h5 className="card-title">Profit November</h5>
                          <p className="card-text">5.66% </p>
                        </div>
                        <div className='trade_head'>
                          <h6>Total Trades:</h6><h6>8,347</h6>
                        </div>
                        <p className='data'>Data since October 26, 2023</p>
                        <div className='trade_head'>
                          <h6>Winning trade</h6><h6>Avg.Profit / trade</h6>
                        </div>

                        <div className='trade_head'>
                          <h6><NorthIcon className='arrow_up' /><span className='amount'>5,277</span>73.09%</h6><h6>0.001%</h6>
                        </div>
                        <div className='trade_head'>
                          <h6>Losing trade</h6><h6>W / L Ratio</h6>
                        </div>
                        <div className='trade_head'>
                          <h6><SouthIcon className='arrow_down' /><span className='amount_new'>5,277</span>73.09%</h6><h6>0.001%</h6>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="card profit_inner_card card_1" >

                          <div className="card-body">
                            <div className="icon_profit">
                              <img src={profit3} className="profit" alt="Covido logo" />
                            </div>
                            <div className="card_data">
                              <h5 className="card-title">Profit</h5>
                              <p className="card-text">Since inception</p>
                              <h6>$0</h6>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="card profit_inner_card card_2" >

                          <div className="card-body">
                            <div className="icon_profit">
                              <img src={profit5} className="profit" alt="Covido logo" />
                            </div>
                            <div className="card_data">
                              <h5 className="card-title">Profit</h5>
                              <p className="card-text">November</p>
                              <h6>$0</h6></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="card profit_inner_card card_3" >

                          <div className="card-body">
                            <div className="icon_profit">
                              <img src={hour24} className="profit" alt="Covido logo" />
                            </div>
                            <div className="card_data">
                              <h5 className="card-title">Profit</h5>
                              <p className="card-text">24 Hour</p>
                              <h6>$0</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="card profit_inner_card card_4" >

                          <div className="card-body">
                            <div className="icon_profit">
                              <img src={profit4} className="profit" alt="Covido logo" />
                            </div>
                            <div className="card_data">
                              <h5 className="card-title">Profit</h5>
                              <p className="card-text">Currently</p>
                              <h6>$0</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card total_limit">
                          <div className="card-body">
                            <h6>Total limit : <span>$5,0000</span></h6>
                            <p > $0</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/* portfolio */}
              <div className="portfolio_sec">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card scan_card">
                      <div className="card-body">
                        <div className="link-copy ">
                          <input type='text' value="https://web.gtccapital.com/auth/signup/" disabled></input>
                          <div className="icon-copy">
                            <FileCopyIcon />
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">

                    <div className="card rank_card mb-3">
                      <div className="card-body">
                        <div className="executive_icon">
                          <img src={portfolio} className="portfolio-img" alt="portfolio" />
                        </div>
                        <div className="current_rank">
                          <h6 className="card-title">Portfolio (Infra)</h6>
                          <p className="card-text">$0</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card rank_card mb-3">
                      <div className="card-body">
                        <div className="executive_icon port_icon">
                          <img src={portfolio} className="portfolio-img" alt="portfolio" />
                        </div>
                        <div className="current_rank">
                          <h6 className="card-title">Portfolio (Wallet)</h6>
                          <p className="card-text">$0</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* history */}
              <div className="performance_cards">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card left_card mb-3">
                      <div className="card-body">

                        <h5>Past Performance</h5>
                        <div className="list_sec">
                          <p>June, 2023</p>
                          <p className='percentage'>9.06%</p>
                          <p><FileCopyIcon /></p>
                        </div>
                        <div className="list_sec">
                          <p>July, 2023</p>
                          <p className='percentage'>5.00%</p>
                          <p><FileCopyIcon /></p>
                        </div>
                        <div className="list_sec">
                          <p>Aug, 2023</p>
                          <p className='percentage'>3.07%</p>
                          <p><FileCopyIcon /></p>
                        </div>



                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card right_sec mb-3">
                      <div className="card-body">
                        <h5>History - October</h5>
                        <div className="profit_month">
                          <p>Profit October</p>
                          <p>9.06%</p>
                        </div>
                        <div className="inner_img_sec">
                          <div className="img_icons">
                            <img src={btc_img} alt="btc" />
                            <p>BTC</p>
                          </div>
                          <div className="img_icons">
                            <img src={eth} alt="eth" />
                            <p>ETH</p>
                          </div>
                          <div className="img_icons">
                            <img src={bnb_img} alt="bnb" />
                            <p>BNB</p>
                          </div>
                          <div className="img_icons">
                            <img src={xrp} alt="xrp" />
                            <p>XRP</p>
                          </div>
                        </div>
                        <button className='button_style'>Report</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* table section */}
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
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />Bitcoin</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

                        </tr>
                        <tr className="table_data_row">
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />USDT</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

                        </tr>
                        <tr className="table_data_row">
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />METIC</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

                        </tr>
                        <tr className="table_data_row">
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />USDT</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

                        </tr>
                        <tr className="table_data_row">
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />BITCOIN</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

                        </tr>
                        <tr className="table_data_row">
                          <td className="table_data"><div className="pic_text"><img src={btc_img} alt="bitcoin_pic" />METIC</div></td>
                          <td className="table_data">BTC</td>
                          <td className="table_data payment_fee">0.5%</td>
                          <td className="table_data">2</td>
                          <td className="table_data">$25961.08</td>
                          <td className="table_data payment_fee">1.00000000</td>

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
    </>
  )
}

export default Dashboard