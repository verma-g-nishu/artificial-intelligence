import React from 'react';
import './Assets/Scss/Style.scss';
import { BrowserRouter as Router, Routes, Route, Outlet, } from "react-router-dom";
import Login from './Public/Users/Login';
import Register from './Public/Users/Register';
import Dashboard from './Public/HomePage/Dashboard';
import Profile from './Profile';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Market from './Private/Market';
import { titleDescription } from './config/Config';
import Sidebar from './Layout/Sidebar';
import Deposit from './Public/HomePage/Deposit';

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
            <Route path='/login' element={<Login pageTitle={`Login | ${titleDescription}`} />} />
            <Route path='/register' element={<Register pageTitle={`Register | ${titleDescription}`} />} />
          </Route>


          {/* All Public pages___ */}
          <Route element={<PublicLayout />}>
            <Route path='*' element={<Dashboard pageTitle={`Dashboard | ${titleDescription}`} />} />
            <Route path='/dashboard' element={<Dashboard pageTitle={`Dashboard | ${titleDescription}`} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/deposit' element={<Deposit />} />
          </Route>



          {/* All Public pages___ */}
          <Route element={<PrivateLayout />}>
            <Route path='/market' element={<Market pageTitle={`Market | ${titleDescription}`} />} />
          </Route>



        </Routes>
      </Router>


    </>
  );
}

export default App;
