import React, { useEffect, useState } from 'react'
import Modal from 'react-responsive-modal';
import { Accordion } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AccountBalanceWallet, AutoStories, CardGiftcard, Dashboard, Description, Groups, Help, Key, Logout, MonetizationOn, Payment, PersonOutline, ShoppingBasket, ViewCompact } from '@mui/icons-material';
// import QRCode from 'qrcode.react';
import scan_code from '../Assets/Image/scan_code.png';
import 'react-responsive-modal/styles.css';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { logo } from '../config/Config';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




const Header = () => {

  const [open2, setonOpenModal2] = useState(false);
  const onOpenModal2 = () => setonOpenModal2(true);
  const onCloseModal2 = () => setonOpenModal2(false);
  const [open, setOpen] = useState(false);
  const [sponsorId, setSponsorId] = useState('');

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  let location = useLocation();
  const navigate = useNavigate();
  const auth = localStorage.getItem('auth');




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

          </div>

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
        </div>
        <div className="right-header-sec">
          {/* <div className="icons_im">
            <input type='text' value="https://web.gtccapital.com/auth/signup/" disabled></input>

            <img src={scan_code} className="scan_code" alt="scan" />

            <FileCopyIcon />
          </div> */}
          {/* <CircleNotificationsIcon className='ring-icon' /> */}
          <button className='button_style'>Log Out</button>
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
              <div className="logo_sec">
                <a className="sidebar_logo" href="/dashboard">
                  <img src={logo} className="header-brand-img" alt="Covido logo" />
                </a>
              </div>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='only_button'>
                    <Link to="/dashboard" className={location.pathname === '/dashboard' ? "drop_link active_Link" : ' drop_ink'}><Dashboard />Dashboard</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header className='only_button'>
                    <Link to="/profile" className={location.pathname === '/profile' ? "drop_link active_Link" : ' drop_ink'}><PersonOutline />Profile</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header className='only_button'>
                    <Link to="/deposit" className={location.pathname === '/deposit' ? "drop_link active_Link" : ' drop_ink'}><MonetizationOn />Deposit</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header><span><ShoppingBasket />Infrastructure</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a href="/buy-infra">Buy Infra</a></li>
                      <li><a href="/trading-profit">Trading Profit</a></li>
                      <li><a>Ticket View</a></li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="4">
                  <Accordion.Header className='only_button'>
                    <Link to="/team" className={location.pathname === '/team' ? "drop_link active_Link" : ' drop_ink'}><Groups />Team</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className='only_button'>
                    <Link to="/overview" className={location.pathname === '/overview' ? "drop_link active_Link" : ' drop_ink'}><ViewCompact />Overview</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header><span><AccountBalanceWallet />Income</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a href='/uni-level'>Uni-Level</a></li>
                      <li><a href='/rankroyalty'>Rank Royalty</a></li>
                      <li><a href='/globalpool'>Global Lifetime Pool</a></li>
                      <li><a href='/cashflow'>Cashflow</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className='only_button'>
                    <Link to="/ledger" className={location.pathname === '/ledger' ? "drop_link active_Link" : ' drop_ink'}><Description />Ledger</Link>
                  </Accordion.Header>
                </Accordion.Item>

                {/* <Accordion.Item eventKey="8">
                  <Accordion.Header><span><CardGiftcard />Promotions</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>IGNITE</a></li>
                      <li><a>Golden Diwali</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item> */}
                {/* 
                <Accordion.Item eventKey="9">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/crytic' ? "drop_link active_Link" : ' drop_ink'}><Key />Cryptic ID</Link>
                  </Accordion.Header>
                </Accordion.Item> */}

                <Accordion.Item eventKey="10">
                  <Accordion.Header><span><Payment />Payout</span></Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li><a>Request</a></li>
                      <li><a href='/pay-history'>History</a></li>

                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header className='only_button'>
                    <Link to="/presentations" className={location.pathname === '/presentations' ? "drop_link active_Link" : ' drop_ink'}><AutoStories />Presentations</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header className='only_button'>
                    <Link to="/support" className={location.pathname === '/support' ? "drop_link active_Link" : ' drop_ink'}><Help />Support</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/logout' ? "drop_link active_Link" : ' drop_ink'} ><Logout />Log out</Link>
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