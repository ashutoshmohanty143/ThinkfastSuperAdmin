import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <main id="content" role="main" className="main">
        <div className="content container-fluid">

            <div className="page-header">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="page-header-title">Dashboard</h1>
                    </div>

                    <div className="col-auto">
                        <a className="btn btn-primary" href="" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                            <i className="bi-person-plus-fill me-1"></i> Invite users
                        </a>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">

                    <a className="card card-hover-shadow h-100" href="#">
                        <div className="card-body">
                            <h6 className="card-subtitle">Total Users</h6>
                            <div className="row align-items-center gx-2 mb-1">
                                <div className="col-6">
                                    <h2 className="card-title text-inherit">72,540</h2>
                                </div>

                                <div className="col-6">

                                    <div className="chartjs-custom" style={{ height: '3rem' }}>
                                        <canvas className="js-chart" data-hs-chartjs-options='{
                        "type": "line",
                        "data": {
                        "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                        "datasets": [{
                        "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                        "borderColor": "#377dff",
                        "borderWidth": 2,
                        "pointRadius": 0,
                        "pointHoverRadius": 0
                        }]
                        },
                        "options": {
                        "scales": {
                        "yAxes": [{
                        "display": false
                        }],
                        "xAxes": [{
                        "display": false
                        }]
                        },
                        "hover": {
                        "mode": "nearest",
                        "intersect": false
                        },
                        "tooltips": {
                        "postfix": "k",
                        "hasIndicator": true,
                        "intersect": false
                        }
                        }
                        }'>
                                        </canvas>
                                    </div>

                                </div>

                            </div>

                            <span className="badge bg-soft-success text-success">
                                <i className="bi-graph-up"></i> 12.5%
                            </span>
                            <span className="text-body fs-6 ms-1">from 70,104</span>
                        </div>
                    </a>

                </div>
                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">

                    <a className="card card-hover-shadow h-100" href="#">
                        <div className="card-body">
                            <h6 className="card-subtitle">Sessions</h6>
                            <div className="row align-items-center gx-2 mb-1">
                                <div className="col-6">
                                    <h2 className="card-title text-inherit">29.4%</h2>
                                </div>

                                <div className="col-6">

                                    <div className="chartjs-custom" style={{ height: '3rem' }}>
                                        <canvas className="js-chart" data-hs-chartjs-options='{
                        "type": "line",
                        "data": {
                        "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                        "datasets": [{
                        "data": [21,20,24,20,18,17,15,17,30,30,35,25,18,30,31,35,35,90,90,90,85,100,120,120,120,100,90,75,75,75,90],
                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                        "borderColor": "#377dff",
                        "borderWidth": 2,
                        "pointRadius": 0,
                        "pointHoverRadius": 0
                        }]
                        },
                        "options": {
                        "scales": {
                        "yAxes": [{
                        "display": false
                        }],
                        "xAxes": [{
                        "display": false
                        }]
                        },
                        "hover": {
                        "mode": "nearest",
                        "intersect": false
                        },
                        "tooltips": {
                        "postfix": "%",
                        "hasIndicator": true,
                        "intersect": false
                        }
                        }
                        }'>
                                        </canvas>
                                    </div>

                                </div>

                            </div>

                            <span className="badge bg-soft-success text-success">
                                <i className="bi-graph-up"></i> 1.7%
                            </span>
                            <span className="text-body fs-6 ms-1">from 29.1%</span>
                        </div>
                    </a>

                </div>
                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">

                    <a className="card card-hover-shadow h-100" href="#">
                        <div className="card-body">
                            <h6 className="card-subtitle">Avg. Click Rate</h6>
                            <div className="row align-items-center gx-2 mb-1">
                                <div className="col-6">
                                    <h2 className="card-title text-inherit">56.8%</h2>
                                </div>

                                <div className="col-6">

                                    <div className="chartjs-custom" style={{ height: '3rem' }}>
                                        <canvas className="js-chart" data-hs-chartjs-options='{
                        "type": "line",
                        "data": {
                        "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                        "datasets": [{
                        "data": [25,18,30,31,35,35,60,60,60,75,21,20,24,20,18,17,15,17,30,120,120,120,100,90,75,90,90,90,75,70,60],
                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                        "borderColor": "#377dff",
                        "borderWidth": 2,
                        "pointRadius": 0,
                        "pointHoverRadius": 0
                        }]
                        },
                        "options": {
                        "scales": {
                        "yAxes": [{
                        "display": false
                        }],
                        "xAxes": [{
                        "display": false
                        }]
                        },
                        "hover": {
                        "mode": "nearest",
                        "intersect": false
                        },
                        "tooltips": {
                        "postfix": "%",
                        "hasIndicator": true,
                        "intersect": false
                        }
                        }
                        }'>
                                        </canvas>
                                    </div>

                                </div>

                            </div>

                            <span className="badge bg-soft-danger text-danger">
                                <i className="bi-graph-down"></i> 4.4%
                            </span>
                            <span className="text-body fs-6 ms-1">from 61.2%</span>
                        </div>
                    </a>

                </div>
                <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">

                    <a className="card card-hover-shadow h-100" href="#">
                        <div className="card-body">
                            <h6 className="card-subtitle">Pageviews</h6>
                            <div className="row align-items-center gx-2 mb-1">
                                <div className="col-6">
                                    <h2 className="card-title text-inherit">92,913</h2>
                                </div>

                                <div className="col-6">

                                    <div className="chartjs-custom" style={{ height: '3rem' }}>
                                        <canvas className="js-chart" data-hs-chartjs-options='{
                        "type": "line",
                        "data": {
                        "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                        "datasets": [{
                        "data": [21,20,24,15,17,30,30,35,35,35,40,60,12,90,90,85,70,75,43,75,90,22,120,120,90,85,100,92,92,92,92],
                        "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                        "borderColor": "#377dff",
                        "borderWidth": 2,
                        "pointRadius": 0,
                        "pointHoverRadius": 0
                        }]
                        },
                        "options": {
                        "scales": {
                        "yAxes": [{
                        "display": false
                        }],
                        "xAxes": [{
                        "display": false
                        }]
                        },
                        "hover": {
                        "mode": "nearest",
                        "intersect": false
                        },
                        "tooltips": {
                        "postfix": "k",
                        "hasIndicator": true,
                        "intersect": false
                        }
                        }
                        }'>
                                        </canvas>
                                    </div>

                                </div>

                            </div>

                            <span className="badge bg-soft-secondary text-body">0.0%</span>
                            <span className="text-body fs-6 ms-1">from 2,913</span>
                        </div>
                    </a>

                </div>
            </div>




            <div className="card mb-3 mb-lg-5">

                <div className="card-header">
                    <div className="row justify-content-between align-items-center flex-grow-1">
                        <div className="col-md">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="card-header-title">Users</h4>

                                <div id="datatableCounterInfo" style={{ display: 'none' }}>
                                    <div className="d-flex align-items-center">
                                        <span className="fs-6 me-3">
                                            <span id="datatableCounter">0</span>
                                            Selected
                                        </span>
                                        <a className="btn btn-outline-danger btn-sm" href="">
                                            <i className="tio-delete-outlined"></i> Delete
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-auto">

                            <div className="row align-items-sm-center">
                                <div className="col-sm-auto">
                                    <div className="row align-items-center gx-0">
                                        <div className="col">
                                            <span className="text-secondary me-2">Status:</span>
                                        </div>

                                        <div className="col-auto">

                                            <div className="tom-select-custom tom-select-custom-end">
                                                <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index="2" data-target-table="datatable" data-hs-tom-select-options='{
                                    "searchInDropdown": false,
                                    "hideSearch": true,
                                    "dropdownWidth": "10rem"
                                    }'>
                                                    <option value="null">All</option>
                                                    <option value="successful">Successful</option>
                                                    <option value="overdue">Overdue</option>
                                                    <option value="pending">Pending</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-sm-auto">
                                    <div className="row align-items-center gx-0">
                                        <div className="col">
                                            <span className="text-secondary me-2">Signed up:</span>
                                        </div>

                                        <div className="col-auto">

                                            <div className="tom-select-custom tom-select-custom-end">
                                                <select className="js-select js-datatable-filter form-select form-select-sm form-select-borderless" data-target-column-index="5" data-target-table="datatable" data-hs-tom-select-options='{
                                    "searchInDropdown": false,
                                    "hideSearch": true,
                                    "dropdownWidth": "10rem"
                                    }'>
                                                    <option value="null">All</option>
                                                    <option value="1 year ago">1 year ago</option>
                                                    <option value="6 months ago">6 months ago</option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md">
                                    <form>

                                        <div className="input-group input-group-merge input-group-flush">
                                            <div className="input-group-prepend input-group-text">
                                                <i className="bi-search"></i>
                                            </div>
                                            <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="table-responsive datatable-custom">
                    <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options='{
        "columnDefs": [{
        "targets": [0, 1, 4],
        "orderable": false
        }],
        "order": [],
        "info": {
        "totalQty": "#datatableWithPaginationInfoTotalQty"
        },
        "search": "#datatableSearch",
        "entries": "#datatableEntries",
        "pageLength": 8,
        "isResponsive": false,
        "isShowPaging": false,
        "pagination": "datatablePagination"
        }'>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </th>
                                <th className="table-column-ps-0">Full name</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>Email</th>
                                <th>Signed up</th>
                                <th>User ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck2" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img10.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">Amanda Harvey <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-success"></span>Successful
                                </td>
                                <td>Unassigned</td>
                                <td>amanda@site.com</td>
                                <td>1 year ago</td>
                                <td>67989</td>
                            </tr>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck3" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">A</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">Anne Richard</h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-success"></span>Successful
                                </td>
                                <td>Subscription</td>
                                <td>anne@site.com</td>
                                <td>6 months ago</td>
                                <td>67326</td>
                            </tr>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck4" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img3.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">David Harrison</h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-danger"></span>Overdue
                                </td>
                                <td>Non-subscription</td>
                                <td>david@site.com</td>
                                <td>6 months ago</td>
                                <td>55821</td>
                            </tr>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck5" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">Finch Hoot</h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-warning"></span>Pending
                                </td>
                                <td>Subscription</td>
                                <td>finch@site.com</td>
                                <td>1 year ago</td>
                                <td>85214</td>
                            </tr>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck6" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">B</span>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">Bob Dean</h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-success"></span>Successful
                                </td>
                                <td>Subscription</td>
                                <td>bob@site.com</td>
                                <td>6 months ago</td>
                                <td>75470</td>
                            </tr>
                            <tr>
                                <td className="table-column-pe-0">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="usersDataCheck7" />
                                        <label className="form-check-label"></label>
                                    </div>
                                </td>
                                <td className="table-column-ps-0">
                                    <a className="d-flex align-items-center" href="./user-profile.html">
                                        <div className="flex-shrink-0">
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img9.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="text-inherit mb-0">Ella Lauda <i className="bi-patch-check-fill text-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i></h5>
                                        </div>
                                    </a>
                                </td>
                                <td>
                                    <span className="legend-indicator bg-warning"></span>Pending
                                </td>
                                <td>Subscription</td>
                                <td>Ella@site.com</td>
                                <td>1 year ago</td>
                                <td>37534</td>
                            </tr>

                        </tbody>
                    </table>
                </div>


                <div className="card-footer">

                    <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                <span className="me-2">Showing:</span>

                                <div className="tom-select-custom">
                                    <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" data-hs-tom-select-options='{
                        "searchInDropdown": false,
                        "hideSearch": true
                        }'>
                                        <option value="4">4</option>
                                        <option value="6">6</option>
                                        <option value="8">8</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>

                                <span className="text-secondary me-2">of</span>

                                <span id="datatableWithPaginationInfoTotalQty"></span>
                            </div>
                        </div>

                        <div className="col-sm-auto">
                            <div className="d-flex justify-content-center justify-content-sm-end">

                                <nav id="datatablePagination" aria-label="Activity pagination"></nav>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        </main>
    )
  }
}
