import React from 'react';
import './Assets/Scss/Style.scss';
import { BrowserRouter as Router, Routes, Route, Outlet, } from "react-router-dom";
import Login from './Public/Users/Login';
import Register from './Public/Users/Register';
import Forgot from './Public/Users/Forgot';
import Dashboard from './Public/HomePage/Dashboard';
import Profile from './Public/HomePage/Profile';
import Trading from './Public/HomePage/Trading';
import Team from './Public/HomePage/Team';
import Overview from './Public/HomePage/Overview';
import Ledger from './Public/HomePage/Ledger';
import PayHistory from './Public/HomePage/PayHistory';
import RankRoyalty from './Public/HomePage/RankRoyalty';
import Globalpool from './Public/HomePage/Globalpool';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Market from './Private/Market';
import { titleDescription } from './config/Config';
import Sidebar from './Layout/Sidebar';
import Deposit from './Public/HomePage/Deposit';
import PrivateRoutes from './config/PrivateRoutes';
import BuyInfra from './Public/HomePage/BuyInfra';
// import { ToastContainer } from 'react-toastify';
import UniLevel from './Public/HomePage/UniLevel';
import Cashflow from './Public/HomePage/Cashflow';
import Presentations from './Public/HomePage/Presentations';
import { Global } from '@emotion/react';
import Support from './Public/HomePage/Support';

function App() {

  // ? Login page.....
  function LoginLayout() {
    return (
      <>
        <Outlet />
      </>
    );
  }

  // Public page.....
  function PublicLayout() {
    return (
      <>
        <Sidebar />
        <Header />

        <Outlet />
        <Footer />

      </>
    );
  }

  // Only Private page.....
  function PrivateLayout() {
    return (
      <>
        <Sidebar />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }



  return (
    <>

      <Router>
        <Routes>


          {/* header and footer is removed this layout */}
          <Route element={<LoginLayout />}>
            <Route path='*' element={<Login pageTitle={`Login | ${titleDescription}`} />} />
            <Route path='/login' element={<Login pageTitle={`Login | ${titleDescription}`} />} />
            <Route path='/register' element={<Register pageTitle={`Register | ${titleDescription}`} />} />
            <Route path='/register/:sponser' element={<Register pageTitle={`Register | ${titleDescription}`} />} />
            <Route path='/forgot' element={<Forgot pageTitle={`Forgot | ${titleDescription}`} />} />
          </Route>

          {/* All Public pages___ */}
          {/* <Route element={<PrivateRoutes />}> */}
          <Route element={<PublicLayout />}>
            <Route path='/dashboard' element={<Dashboard pageTitle={`Dashboard | ${titleDescription}`} />} />
            <Route path='/profile' element={<Profile pageTitle={`Profile | ${titleDescription}`} />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/trading-profit' element={<Trading pageTitle={`Trading | ${titleDescription}`} />} />
            <Route path='/buy-infra' element={<BuyInfra pageTitle={`Buy Infra | ${titleDescription}`} />} />
            <Route path='/team' element={<Team pageTitle={`Team | ${titleDescription}`} />} />
            <Route path='/uni-level' element={<UniLevel pageTitle={`Uni Level | ${titleDescription}`} />} />
            <Route path='/cashflow' element={<Cashflow pageTitle={`Cashflow | ${titleDescription}`} />} />
            <Route path='/overview' element={<Overview pageTitle={`Overview | ${titleDescription}`} />} />
            <Route path='/presentations' element={<Presentations pageTitle={`Presentations | ${titleDescription}`} />} />
            <Route path='/ledger' element={<Ledger pageTitle={`Ledger | ${titleDescription}`} />} />
            <Route path='/pay-history' element={<PayHistory pageTitle={`Pay History | ${titleDescription}`} />} />
            <Route path='/rankroyalty' element={<RankRoyalty pageTitle={`Rank Royalty | ${titleDescription}`} />} />
            <Route path='/globalpool' element={<Globalpool pageTitle={`Globalpool | ${titleDescription}`} />} />
            <Route path='/support' element={<Support pageTitle={`Support | ${titleDescription}`} />} />
          </Route>


          {/* </Route> */}

          {/* </Route> */}





          {/* All Public pages___ */}
          <Route element={<PrivateLayout />}>
            <Route path='/market' element={<Market pageTitle={`Market | ${titleDescription}`} />} />
          </Route>



        </Routes>
      </Router >

      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
