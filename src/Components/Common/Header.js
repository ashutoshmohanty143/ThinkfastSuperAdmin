import React, { Component } from 'react'

export default class Header extends Component {

    logout = () => {
        sessionStorage.clear('userToken');
        window.location.href = '/'
    }
    render() {
    return (
      <>

            <header id="header" className="navbar navbar-expand-lg navbar-fixed 
                                            navbar-height navbar-container navbar-bordered bg-white">
                <div className="navbar-nav-wrap">

                    <a className="navbar-brand" href="" aria-label="Front">
                        <img className="navbar-brand-logo" src="./assets/svg/logos/logo.svg" alt="Logo" />
                        {/* <img className="navbar-brand-logo" src="./assets/svg/logos-light/logo.svg" alt="Logo" data-hs-theme-appearance="dark" /> */}
                        {/* <img className="navbar-brand-logo-mini" src="./assets/svg/logos/logo-short.svg" alt="Logo" data-hs-theme-appearance="default" /> */}
                        {/* <img className="navbar-brand-logo-mini" src="./assets/svg/logos-light/logo-short.svg" alt="Logo" data-hs-theme-appearance="dark" /> */}
                    </a>

                    <div className="navbar-nav-wrap-content-start">

                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                        </button>

                        <div className="dropdown ms-2">

                            <div className="d-none d-lg-block">
                                <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search"></i>
                                    </div>
                                    <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" data-hs-form-search-options='{
                        "clearIcon": "#clearSearchResultsIcon",
                        "dropMenuElement": "#searchDropdownMenu",
                        "dropMenuOffset": 20,
                        "toggleIconOnFocus": true,
                        "activeClass": "focus"
                        }' />
                                    <a className="input-group-append input-group-text" href="">
                                        <i id="clearSearchResultsIcon" className="bi-x-lg" style={{ display: 'none' }}></i>
                                    </a>
                                </div>
                            </div>
                            <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" data-hs-form-search-options='{
                "clearIcon": "#clearSearchResultsIcon",
                "dropMenuElement": "#searchDropdownMenu",
                "dropMenuOffset": 20,
                "toggleIconOnFocus": true,
                "activeClass": "focus"
                }'>
                                <i className="bi-search"></i>
                            </button>

                            <div id="searchDropdownMenu" className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless">

                                <div className="card-body-height">
                                    <div className="d-lg-none">
                                        <div className="input-group input-group-merge navbar-input-group mb-5">
                                            <div className="input-group-prepend input-group-text">
                                                <i className="bi-search"></i>
                                            </div>
                                            <input type="search" className="form-control" placeholder="Search in front" aria-label="Search in front" />
                                            <a className="input-group-append input-group-text" href="">
                                                <i className="bi-x-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <span className="dropdown-header">Recent searches</span>
                                    <div className="dropdown-item bg-transparent text-wrap">
                                        <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                                            Gulp <i className="bi-search ms-1"></i>
                                        </a>
                                        <a className="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                                            Notification panel <i className="bi-search ms-1"></i>
                                        </a>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-header">Tutorials</span>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="icon icon-soft-dark icon-xs icon-circle">
                                                    <i className="bi-sliders"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>How to set up Gulp?</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <span className="icon icon-soft-dark icon-xs icon-circle">
                                                    <i className="bi-paint-bucket"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>How to change theme color?</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-header">Members</span>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <img className="avatar avatar-xs avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>David Harrison</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="./index.html">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                                                    <span className="avatar-initials">A</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <span>Anne Richard</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <a className="card-footer text-center" href="./index.html">
                                    See all results <i className="bi-chevron-right small"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="navbar-nav-wrap-content-end">

                        <ul className="navbar-nav">
                            <li className="nav-item d-none d-sm-inline-block">

                                <div className="dropdown">
                                    <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                        <i className="bi-bell"></i>
                                        <span className="btn-status btn-sm-status btn-status-danger"></span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{ width: '25rem' }}>

                                        <div className="card-header card-header-content-between">
                                            <h4 className="card-title mb-0">Notifications</h4>

                                            <div className="dropdown">
                                                <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi-three-dots-vertical"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                                                    <span className="dropdown-header">Settings</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-archive dropdown-item-icon"></i> Archive all
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-check2-all dropdown-item-icon"></i> Mark all as read
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-toggle-off dropdown-item-icon"></i> Disable notifications
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-gift dropdown-item-icon"></i> What's new?
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <span className="dropdown-header">Feedback</span>
                                                    <a className="dropdown-item" href="#">
                                                        <i className="bi-chat-left-dots dropdown-item-icon"></i> Report
                                                    </a>
                                                </div>
                                            </div>

                                        </div>


                                        <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                                            </li>
                                        </ul>

                                        <div className="card-body-height">

                                            <div className="tab-content" id="notificationTabContent">
                                                <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">

                                                    <ul className="list-group list-group-flush navbar-card-list-group">

                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck1" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <img className="avatar avatar-sm avatar-circle" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Brian Warner</h5>
                                                                    <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">2hr</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck2" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">K</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Klara Hampton</h5>
                                                                    <p className="text-body fs-5">mentioned you in a comment</p>
                                                                    <blockquote className="blockquote blockquote-sm">
                                                                        Nice work, love! You really nailed it. Keep it up!
                                                                    </blockquote>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">10hr</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck3" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Ruby Walter</h5>
                                                                    <p className="text-body fs-5">joined the Slack group HS Team</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">3dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck4" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">from Google</h5>
                                                                    <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">17dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck5" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Sara Villar</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i> FD-7 task</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">2mn</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>

                                                    </ul>

                                                </div>
                                                <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">

                                                    <ul className="list-group list-group-flush navbar-card-list-group">

                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck6" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">A</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Anne Richard</h5>
                                                                    <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">1dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck7" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Finch Hoot</h5>
                                                                    <p className="text-body fs-5">left Slack group HS projects</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">1dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck8" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                                            <span className="avatar-initials">HS</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Htmlstream</h5>
                                                                    <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary"></i> badge</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">6dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck9" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-circle">
                                                                            <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Linda Bates</h5>
                                                                    <p className="text-body fs-5">Accepted your connection</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">17dy</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>


                                                        <li className="list-group-item form-check-select">
                                                            <div className="row">
                                                                <div className="col-auto">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" value="" id="notificationCheck10" />
                                                                            <label className="form-check-label"></label>
                                                                            <span className="form-check-stretched-bg"></span>
                                                                        </div>
                                                                        <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                            <span className="avatar-initials">L</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="col ms-n2">
                                                                    <h5 className="mb-1">Lewis Clarke</h5>
                                                                    <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i> FD-134 task</p>
                                                                </div>

                                                                <small className="col-auto text-muted text-cap">2mts</small>

                                                            </div>

                                                            <a className="stretched-link" href="#"></a>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>

                                        </div>


                                        <a className="card-footer text-center" href="#">
                                            View all notifications <i className="bi-chevron-right"></i>
                                        </a>

                                    </div>
                                </div>

                            </li>
                            <li className="nav-item d-none d-sm-inline-block">

                                <div className="dropdown">
                                    <button type="button" className="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                                        <i className="bi-app-indicator"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{ width: '25rem' }}>

                                        <div className="card-header">
                                            <h4 className="card-title">Web apps &amp; services</h4>
                                        </div>


                                        <div className="card-body card-body-height">
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Atlassian</h5>
                                                        <p className="card-text text-body">Security and control across Cloud</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/slack-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Slack <span className="badge bg-primary rounded-pill text-uppercase ms-1">Try</span></h5>
                                                        <p className="card-text text-body">Email collaboration software</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Google webdev</h5>
                                                        <p className="card-text text-body">Work involved in developing a website</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/brands/frontapp-icon.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">Frontapp</h5>
                                                        <p className="card-text text-body">The inbox for teams</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <img className="avatar avatar-xs avatar-4x3" src="./assets/svg/illustrations/review-rating-shield.svg" alt="Image Description" />
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">HS Support</h5>
                                                        <p className="card-text text-body">Customer service and support</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0">
                                                        <div className="avatar avatar-sm avatar-soft-dark">
                                                            <span className="avatar-initials"><i className="bi-grid"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1 text-truncate ms-3">
                                                        <h5 className="mb-0">More Front products</h5>
                                                        <p className="card-text text-body">Check out more HS products</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                        <a className="card-footer text-center" href="#">
                                            View all apps <i className="bi-chevron-right"></i>
                                        </a>

                                    </div>
                                </div>

                            </li>
                            <li className="nav-item d-none d-sm-inline-block">

                                <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
                                    <i className="bi-x-diamond"></i>
                                </button>

                            </li>
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
                                                    <h5 className="mb-0">Mark Williams</h5>
                                                    <p className="card-text text-body">mark@site.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider"></div>

                                        <div className="dropdown">
                                            <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>
                                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-success me-1"></span> Available
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-danger me-1"></span> Busy
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-warning me-1"></span> Away
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#"> Reset status
                                                </a>
                                            </div>
                                        </div>

                                        <a className="dropdown-item" href="#">Profile &amp; account</a>
                                        <a className="dropdown-item" href="#">Settings</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                        <span className="avatar-initials">HS</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                                                    <span className="card-text">hs.example.com</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>

                                        <div className="dropdown">
                                            <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="" id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Customization</a>
                                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                                                <a className="dropdown-item" href="#">
                                                    Invite people
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Analytics
                                                    <i className="bi-box-arrow-in-up-right"></i>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Customize Front
                                                    <i className="bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <a className="dropdown-item" href="#">Manage team</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" onClick={this.logout}>Sign out</a>
                                    </div>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </header>


            <div className="offcanvas offcanvas-end" id="offcanvasActivityStream" aria-labelledby="offcanvasActivityStreamLabel">
                <div className="offcanvas-header">
                    <h4 id="offcanvasActivityStreamLabel" className="mb-0">Activity stream</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <ul className="step step-icon-sm step-avatar-sm">

                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Iana Robinson</h5>
                                    <p className="fs-5 mb-1">Added 2 files to task <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill"></i> Fd-7</a></p>
                                    <ul className="list-group list-group-sm">

                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col-6">

                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/excel-icon.svg" alt="Image Description" />
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-2">
                                                            <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <span className="d-block small text-muted">12kb</span>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-6">

                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img className="avatar avatar-xs" src="./assets/svg/brands/word-icon.svg" alt="Image Description" />
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-2">
                                                            <span className="d-block fs-6 text-dark text-truncate" title="weekly-reports.xls">weekly-reports.xls</span>
                                                            <span className="d-block small text-muted">4kb</span>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </li>

                                    </ul>
                                    <span className="small text-muted text-uppercase">Now</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-dark">B</span>
                                <div className="step-content">
                                    <h5 className="mb-1">Bob Dean</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill"></i> Fr-6</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success"></span>"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Today</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="h5 mb-1">Crane</h5>
                                    <p className="fs-5 mb-1">Added 5 card to <a href="#">Payments</a></p>
                                    <ul className="list-group list-group-sm">
                                        <li className="list-group-item list-group-item-light">
                                            <div className="row gx-1">
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-1.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-2.svg" alt="Image Description" />
                                                </div>
                                                <div className="col">
                                                    <img className="img-fluid rounded" src="./assets/svg/components/card-3.svg" alt="Image Description" />
                                                </div>
                                                <div className="col-auto align-self-center">
                                                    <div className="text-center">
                                                        <a href="#">+2</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className="small text-muted text-uppercase">May 12</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-info">D</span>
                                <div className="step-content">
                                    <h5 className="mb-1">David Lidell</h5>
                                    <p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
                                    <span className="small text-muted text-uppercase">May 15</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Rachel King</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill"></i> Fr-3</a> as <span className="badge bg-soft-success text-success rounded-pill"><span className="legend-indicator bg-success"></span>"Completed"</span></p>
                                    <span className="small text-muted text-uppercase">Apr 29</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <div className="step-avatar">
                                    <img className="step-avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                </div>
                                <div className="step-content">
                                    <h5 className="mb-1">Finch Hoot</h5>
                                    <p className="fs-5 mb-1">Earned a "Top endorsed" <i className="bi-patch-check-fill text-primary"></i> badge</p>
                                    <span className="small text-muted text-uppercase">Apr 06</span>
                                </div>
                            </div>
                        </li>


                        <li className="step-item">
                            <div className="step-content-wrapper">
                                <span className="step-icon step-icon-soft-primary">
                                    <i className="bi-person-fill"></i>
                                </span>
                                <div className="step-content">
                                    <h5 className="mb-1">Project status updated</h5>
                                    <p className="fs-5 mb-1">Marked <a className="text-uppercase" href="#"><i className="bi-journal-bookmark-fill"></i> Fr-3</a> as <span className="badge bg-soft-primary text-primary rounded-pill"><span className="legend-indicator bg-primary"></span>"In progress"</span></p>
                                    <span className="small text-muted text-uppercase">Feb 10</span>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <div className="d-grid">
                        <a className="btn btn-white" href="">View all <i className="bi-chevron-right"></i></a>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="inviteUserModal" aria-labelledby="inviteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="inviteUserModalLabel">Invite users</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">

                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select" data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true,
                                "dropdownWidth": "11rem"
                                }'>
                                                <option value="guest">Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>

                                        <a className="btn btn-primary d-none d-sm-inline-block" href="">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="">Invite</a>
                            </div>

                            <div className="row">
                                <h5 className="col modal-title">Invite users</h5>
                                <div className="col-auto">
                                    <a className="d-flex align-items-center small text-body" href="#">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/gmail-icon.svg" alt="Image Description" />
                                        Import contacts
                                    </a>
                                </div>
                            </div>
                            <hr className="mt-2" />
                            <ul className="list-unstyled list-py-2 mb-0">

                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                    <span className="d-block small">amanda@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">David Harrison</h5>
                                                    <span className="d-block small">david@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                    <span className="d-block small">Markvt@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Bob Dean</h5>
                                                    <span className="d-block small">bob@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>


                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="inviteUserPublicClipboard" value="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features."></i>
                                    </p>
                                </div>
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options='{
                    "type": "tooltip",
                    "successText": "Copied!",
                    "contentTarget": "#inviteUserPublicClipboard",
                    "container": "#inviteUserModal"
                    }'>
                                        <i className="bi-link-45deg me-1"></i> Copy link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div><div className="modal fade" id="inviteUserModal" aria-labelledby="inviteUserModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="inviteUserModalLabel">Invite users</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">

                            <div className="mb-4">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" className="form-control" name="fullName" placeholder="Search name or emails" aria-label="Search name or emails" />
                                    <div className="input-group-append input-group-append-last-sm-down-none">

                                        <div className="tom-select-custom tom-select-custom-end">
                                            <select className="js-select form-select" data-hs-tom-select-options='{
                                "searchInDropdown": false,
                                "hideSearch": true,
                                "dropdownWidth": "11rem"
                                }'>
                                                <option value="guest">Guest</option>
                                                <option value="can edit">Can edit</option>
                                                <option value="can comment">Can comment</option>
                                                <option value="full access">Full access</option>
                                            </select>
                                        </div>

                                        <a className="btn btn-primary d-none d-sm-inline-block" href="">Invite</a>
                                    </div>
                                </div>
                                <a className="btn btn-primary w-100 d-sm-none" href="">Invite</a>
                            </div>

                            <div className="row">
                                <h5 className="col modal-title">Invite users</h5>
                                <div className="col-auto">
                                    <a className="d-flex align-items-center small text-body" href="#">
                                        <img className="avatar avatar-xss avatar-4x3 me-2" src="./assets/svg/brands/gmail-icon.svg" alt="Image Description" />
                                        Import contacts
                                    </a>
                                </div>
                            </div>
                            <hr className="mt-2" />
                            <ul className="list-unstyled list-py-2 mb-0">

                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                    <span className="d-block small">amanda@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">David Harrison</h5>
                                                    <span className="d-block small">david@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></h5>
                                                    <span className="d-block small">Markvt@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="row align-items-center">
                                                <div className="col-sm">
                                                    <h5 className="mb-0">Bob Dean</h5>
                                                    <span className="d-block small">bob@site.com</span>
                                                </div>
                                                <div className="col-sm-auto">

                                                    <div className="tom-select-custom tom-select-custom-sm-end">
                                                        <select className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0" data-hs-tom-select-options='{
                                            "searchInDropdown": false,
                                            "hideSearch": true,
                                            "dropdownWidth": "11rem"
                                            }'>
                                                            <option value="guest">Guest</option>
                                                            <option value="can edit">Can edit</option>
                                                            <option value="can comment">Can comment</option>
                                                            <option value="full access">Full access</option>
                                                            <option value="remove" data-option-template='<div className="text-danger">Remove</div>'>Remove</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>


                        <div className="modal-footer">
                            <div className="row align-items-center flex-grow-1 mx-n2">
                                <div className="col-sm-9 mb-2 mb-sm-0">
                                    <input type="hidden" id="inviteUserPublicClipboard" value="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" />
                                    <p className="modal-footer-text">The public share <a href="#">link settings</a>
                                        <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="The public share link allows people to view the project without giving access to full collaboration features."></i>
                                    </p>
                                </div>
                                <div className="col-sm-3 text-sm-end">
                                    <a className="js-clipboard btn btn-white btn-sm text-nowrap" href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard!" data-hs-clipboard-options='{
                    "type": "tooltip",
                    "successText": "Copied!",
                    "contentTarget": "#inviteUserPublicClipboard",
                    "container": "#inviteUserModal"
                    }'>
                                        <i className="bi-link-45deg me-1"></i> Copy link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

      </>
    )
  }
}
