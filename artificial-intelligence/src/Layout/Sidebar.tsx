import React, { useState } from 'react'
import { logo } from '../config/Config'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useLocation } from 'react-router-dom';
import { AccountBalanceWallet, AutoStories, CardGiftcard, Dashboard, Description, Groups, Help, Key, Logout, MonetizationOn, Payment, PersonOutline, ShoppingBasket, ViewCompact } from '@mui/icons-material';

const Sidebar = () => {
  let location = useLocation();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };


  return (
    <>

      <div className="app-sidebar">
        <div className="app-sidebar__logo">
          <a className="header-brand" href="index.html">
            <img src={logo} className="header-brand-img" alt="Covido logo" />
          </a>
        </div>
        <div className="app-sidebar3">
          <div className="sidebar">
            <ul className="sidebar_menu">

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='only_button'>
                    <Link to="/dashboard" className={location.pathname === '/' ? "drop_link active_Link" : ' drop_ink'}><Dashboard />Dashboard</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header className='only_button'>
                    <Link to="/profile" className={location.pathname === '/Profile' ? "drop_link active_Link" : ' drop_ink'}><PersonOutline />Profile</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/Deposit' ? "drop_link active_Link" : ' drop_ink'}><MonetizationOn />Deposit</Link>
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
                    <Link to="/" className={location.pathname === '/Team' ? "drop_link active_Link" : ' drop_ink'}><Groups />Team</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/Overview' ? "drop_link active_Link" : ' drop_ink'}><ViewCompact />Overview</Link>
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
                    <Link to="/" className={location.pathname === '/Ledger' ? "drop_link active_Link" : ' drop_ink'}><Description />Ledger</Link>
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
                    <Link to="/" className={location.pathname === '/Cryptic' ? "drop_link active_Link" : ' drop_ink'}><Key />Cryptic ID</Link>
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
                    <Link to="/" className={location.pathname === '/Presentations' ? "drop_link active_Link" : ' drop_ink'}><AutoStories />Presentations</Link>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header className='only_button'>
                    <Link to="/" className={location.pathname === '/Support' ? "drop_link active_Link" : ' drop_ink'}><Help />Support</Link>
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
      </div>

    </>
  )
}

export default Sidebar