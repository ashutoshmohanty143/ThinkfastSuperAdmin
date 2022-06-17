import React from 'react'
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
      <>
      <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white">
        <div className="navbar-vertical-container">
          <div className="navbar-vertical-footer-offset">
            <a className="navbar-brand" href="" aria-label="Front" >
              <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" 
                                                                        data-hs-theme-appearance="default" />
              <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo"
                                                                        data-hs-theme-appearance="dark" />
              <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo"
                                                                        data-hs-theme-appearance="default" />
              <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo"
                                                                        data-hs-theme-appearance="dark" />
            </a>
            <button
              type="button"
              className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
            >
              <i
                className="bi-arrow-bar-left navbar-toggler-short-align"
                data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Collapse"
              ></i>
              <i
                className="bi-arrow-bar-right navbar-toggler-full-align"
                data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Expand"
              ></i>
            </button>
            <div className="navbar-vertical-content">
              <div
                id="navbarVerticalMenu"
                className="nav nav-pills nav-vertical card-navbar-nav"
              >
                <div className="nav-item">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#navbarVerticalMenuDashboards"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarVerticalMenuDashboards"
                    aria-expanded="true"
                    aria-controls="navbarVerticalMenuDashboards"
                  >
                    <i className="bi-house-door nav-icon"></i>
                    <span className="nav-link-title">Dashboards</span>
                  </a>
                  <div id="navbarVerticalMenuDashboards" className="nav-collapse collapse show"
                    data-bs-parent="#navbarVerticalMenu">


                    <NavLink className="nav-link" to="/dashboard">Home</NavLink>
                  
                  </div>
                </div>
                <span className="dropdown-header mt-4">Pages</span>
                <small className="bi-three-dots nav-subtitle-replacer"></small>
                <div className="navbar-nav nav-compact"></div>
                <div id="navbarVerticalMenuPagesMenu">
                  <div className="nav-item">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#navbarVerticalMenuPagesUsersMenu"
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarVerticalMenuPagesUsersMenu"
                      aria-expanded="false"
                      aria-controls="navbarVerticalMenuPagesUsersMenu"
                    >
                      <i className="bi-people nav-icon"></i>
                      <span className="nav-link-title">Manage Pages</span>
                    </a>
                    <div
                      id="navbarVerticalMenuPagesUsersMenu"
                      className="nav-collapse collapse "
                      data-bs-parent="#navbarVerticalMenuPagesMenu"
                    >
                      <NavLink className="nav-link" to="/users">Users</NavLink>
                      <NavLink className="nav-link" to="/offers">Offers</NavLink>
                      <NavLink className="nav-link" to="/zones">Zones</NavLink>
                      <NavLink className="nav-link" to="/slots">Slots</NavLink>
                      <NavLink className="nav-link" to="/discounts">Discounts</NavLink>
                      <NavLink className="nav-link" to="/orders">Orders</NavLink>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="modal fade" id="welcomeMessageModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-close">
              <button
                type="button"
                className="btn btn-ghost-secondary btn-icon btn-sm"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="bi-x-lg"></i>
              </button>
            </div>

            <div className="modal-body p-sm-5">
              <div className="text-center">
                <div className="w-75 w-sm-50 mx-auto mb-4">
                  <img
                    className="img-fluid"
                    src="./assets/svg/illustrations/oc-collaboration.svg"
                    alt="Image Description"
                    data-hs-theme-appearance="default"
                  />
                  <img
                    className="img-fluid"
                    src="./assets/svg/illustrations-light/oc-collaboration.svg"
                    alt="Image Description"
                    data-hs-theme-appearance="dark"
                  />
                </div>
                <h4 className="h1">Welcome to Front</h4>
                <p>We're happy to see you in our community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

