import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

import Header from './Common/Header';
import SideNav from './Common/SideNav';
import Footer from './Common/Footer';
import Home from './Home';



class Dashboard extends Component {
    render() {
        return (
            <>
                { sessionStorage.getItem('userToken') ?
                    <>
                        <Header />
                        <SideNav />
                        <Home />
                        <Footer />
                    </> : window.location.href= "/" }
            </>
        )
    }
}
export default Dashboard;
