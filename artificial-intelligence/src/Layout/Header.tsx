import React, { useState } from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Modal from 'react-responsive-modal';
import { Accordion } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AccountBalanceWallet, AutoStories, CardGiftcard, Dashboard, Description, Groups, Help, Key, Logout, MonetizationOn, Payment, PersonOutline, ShoppingBasket, ViewCompact } from '@mui/icons-material';
import scan_code from '../Assets/Image/scan_code.png';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import { logo } from '../config/Config';


const Header = () => {
  let location = useLocation();
  const [open2, setonOpenModal2] = useState(false);
  const onOpenModal2 = () => setonOpenModal2(true);
  const onCloseModal2 = () => setonOpenModal2(false);

  return (
    <>
      <div className="app-header">
        <div className='for_toggle_scan'>
          <div className="app-sidebar__toggle" data-toggle="sidebar">
            <a className="open-toggle" href="#">
              <svg className="header-icon mt-1" onClick={onOpenModal2} xmlns="http://www.w3.org/2000/svg" height="24"
                viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"></path>
              </svg>
            </a>
            <img src={logo} className="header-brand-img" alt="Covido logo" />
          </div>

          <div className="header-left">
            <p><strong>https://web.gtccapital.com/auth/signup/</strong></p>
            {/* <input type='text' value="https://web.gtccapital.com/auth/signup/" disabled></input> */}
            <div className="icons_im">
              <img src={scan_code} className="scan_code" alt="scan" />

              <FileCopyIcon />
            </div>


          </div>
        </div>
        <div className="right-header-sec">
          {/* <div className="icons_im">
            <input type='text' value="https://web.gtccapital.com/auth/signup/" disabled></input>

            <img src={scan_code} className="scan_code" alt="scan" />

            <FileCopyIcon />
          </div> */}
          <CircleNotificationsIcon className='ring-icon' />
          <button className='log-btn'>Log Out</button>
        </div>
      </div>

      {/* modal for responsive sidebar */}

      <Modal open={open2} onClose={onCloseModal2}
        classNames={{
          modal: "new_modal_sidebar",
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
      >

        <div className="responsive_sidebar">
          <div className="sidebar">
            <ul className="sidebar_menu">

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/' ? "drop_link active_Link" : ' drop_ink'}><Dashboard />Dashboard</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/profile' ? "drop_link active_Link" : ' drop_ink'}><PersonOutline />Profile</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/deposit' ? "drop_link active_Link" : ' drop_ink'}><MonetizationOn />Deposit</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header><span><ShoppingBasket />Infrastructure</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>Buy Infra</a></li>
                      <li><a>Trading Profit</a></li>
                      <li><a>Buy History</a></li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="4">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/team' ? "drop_link active_Link" : ' drop_ink'}><Groups />Team</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/overview' ? "drop_link active_Link" : ' drop_ink'}><ViewCompact />Overview</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header><span><AccountBalanceWallet />Income</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>Uni-Level</a></li>
                      <li><a>Rank Royalty</a></li>
                      <li><a>Global Lifetime Pool</a></li>
                      <li><a>Cashflow</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/ledger' ? "drop_link active_Link" : ' drop_ink'}><Description />Ledger</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header><span><CardGiftcard />Promotions</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>IGNITE</a></li>
                      <li><a>Golden Diwali</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/crytic' ? "drop_link active_Link" : ' drop_ink'}><Key />Cryptic ID</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                  <Accordion.Header><span><Payment />Payout</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>Request</a></li>
                      <li><a>History</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/presentation' ? "drop_link active_Link" : ' drop_ink'}><AutoStories />Presentations</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/support' ? "drop_link active_Link" : ' drop_ink'}><Help />Support</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/logout' ? "drop_link active_Link" : ' drop_ink'}><Logout />Log out</Link>
                  </Accordion.Header>
                </Accordion.Item>

              </Accordion>


            </ul>
          </div>
        </div>

      </Modal>
      {/* modal  */}
    </>
  )
}

export default Header