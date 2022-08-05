import React, { useEffect } from "react";
import { Outlet } from 'react-router-dom';

import Header from './Common/Header';
import SideNav from './Common/SideNav';
import Footer from './Common/Footer';
import Home from "./Home";

 function Dashboard() {
    let [dashPath, setdashPath] = React.useState(false);

    useEffect(() =>{
        let isAuth = localStorage.getItem('userToken')
        if(isAuth & isAuth !== 'undefined') {
            this.props.navigate('/dashboard');   
        }

        let path = window.location.pathname;
        if(path === "/dashboard" || path === "/"){
            setdashPath(true);
        }
  });

  return (
    <div>
        { dashPath ? 
            <Home/>
        :  
        <>
        <Header />
        <SideNav />
        <main id="content" role="main" className="main">
            <Outlet />
        </main>
        <Footer />
        </> }
    </div>
  )
}

export default Dashboard;