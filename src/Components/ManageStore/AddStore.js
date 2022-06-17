import React from "react";
import { Link } from "react-router-dom";

import Header from "../Common/Header";
import SideNav from "../Common/SideNav";
import Footer from "../Common/Footer";

export default function AddStore() {
  return (
    <>
      {sessionStorage.getItem("userToken") ? (
        <div>
          <Header />
          <SideNav />
          <main id="content" role="main" className="main">
            <div className="content container-fluid">
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col-sm mb-2 mb-sm-0">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb breadcrumb-no-gutter">
                        <li className="breadcrumb-item">
                          <Link className="breadcrumb-link" to="/stores">
                            Stores
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Add Store
                        </li>
                      </ol>
                    </nav>

                    <h1 className="page-header-title">Add Store</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 mb-3 mb-lg-0">
                  <div className="card mb-3 mb-lg-5">
                    <div className="card-header">
                      <h4 className="card-header-title">
                        Add Store Information
                      </h4>
                    </div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlhtmlFor="storeName" className="form-label"> Store Name </label>

                            <input type="text" className="form-control" name="storeName" id="storeName" placeholder="Store Name" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="email" className="form-label">
                              Email ID
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email ID"
                            />
                          </div>
                        </div>
                       

                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="phone" className="form-label">
                              Phone No.
                            </label>

                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                name="phone"
                                id="phone"
                                placeholder="Phone No."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="cnfPassword" className="form-label">
                             Confirm Password
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              name="cnfPassword"
                              id="cnfPassword"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div></div>
                      <div className="text-end">
                        <a className="btn btn-primary btn-sm" href="#.">
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </>
  );
}
