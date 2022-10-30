import React from 'react'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    let uname = sessionStorage.getItem('userName');
    let navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear('userToken');
        navigate('/login');
    }
  return (
    <>
    <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
        <div className="navbar-nav-wrap">
                  <a className="navbar-brand" href="" aria-label="Front">
                      <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" data-hs-theme-appearance="default" />
                      <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" />
                      <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" />
                      <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" />
                  </a>
            <div className="navbar-nav-wrap-content-start">
                <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                    <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                    <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                </button>
            </div>
            <div className="navbar-nav-wrap-content-end">
                <ul className="navbar-nav">                                      
                    <li className="nav-item">
                        <div className="dropdown">
                            <a className="navbar-dropdown-account-wrapper" href="" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                <div className="avatar avatar-sm avatar-circle">
                                    <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                    <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{ width: '16rem' }}>
                                <div className="dropdown-item-text">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-0"> Superadmin</h5>
                                            <p className="card-text text-body">{uname}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" onClick={logout}>Sign out</button>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </header>
	</>
  )
}
export default Header