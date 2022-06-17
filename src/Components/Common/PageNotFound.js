import React from 'react'
import { NavLink } from "react-router-dom";

import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

function PageNotFound() {
    return (
        <>
            {sessionStorage.getItem('userToken') ?
                <div>
                    <Header />
                    <SideNav />
                    <main id="content" role="main" className="main">

                        <div className="content container-fluid">
                            <div className="row justify-content-center align-items-sm-center py-sm-10">
                                <div className="col-9 col-sm-6 col-lg-4">
                                    <div className="text-center text-sm-end me-sm-4 mb-5 mb-sm-0">
                                        <img className="img-fluid" src="./assets/svg/illustrations/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                        <img className="img-fluid" src="./assets/svg/illustrations-light/oc-thinking.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-4 text-center text-sm-start">
                                    <h1 className="display-1 mb-0">404</h1>
                                    <p className="lead">Sorry, the page you're looking for cannot be found.</p>
                                    <NavLink className="btn btn-primary" to="/dashboard">
                                        Go back to Dashboard
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </main >
                    <Footer />
                </div>
                : window.location.href = "/"}
        </>
    )
}

export default PageNotFound;