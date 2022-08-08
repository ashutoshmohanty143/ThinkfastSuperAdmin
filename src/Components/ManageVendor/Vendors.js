import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import ApiServices from '../Common/ApiServices';

const Vendors = () => {

  const [vendorLists, setVendorLists] = useState([]);
  const [singleFetchRecord, setSingleFetchRecord] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    const collectionName = "vendorusers";
    ApiServices.GetAllRecords(collectionName).then(response => {
      let newdata = response.data.data;
      setVendorLists(newdata);
    }).catch(error => {
      console.log("error", error)
    });
  }

  const handleEditRecord = (event, id) => {
    event.preventDefault();
    navigate('/updatevendor', { state: { vendor_id: id } });
  }

  const handleDeleteRecord = (event, id) => {
    event.preventDefault();
    const collectionName = "vendorusers";

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this vendor",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        ApiServices.DeleteRecord(id, collectionName)
          .then((response) => {
            if (response.status === 200 && response.data.status === "success") {
              swal("This vendor has been deleted!", {
                icon: "success",
              }).then((value) => {
                if (value) {
                  fetchAllData();
                }
              });
            }
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    });
  };

  const handleViewRecord = (event, id) => {
    event.preventDefault();
    const collectionName = "vendorusers";
    event.preventDefault();
    ApiServices.GetSingleRecordById(id, collectionName)
      .then((response) => {
        let fetchdata = response.data.data;
        console.log(fetchdata)
        setSingleFetchRecord(fetchdata);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center mb-3">
            <div className="col-md mb-2 mb-md-0">
              <h1 className="page-header-title">Vendors </h1>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-primary" to="/addvendor">Add Vendor</Link>
            </div>

          </div>

          <div className="js-nav-scroller hs-nav-scroller-horizontal">
            <span className="hs-nav-scroller-arrow-prev" style={{ display: 'none' }}>
              <a className="hs-nav-scroller-arrow-link" href="">
                <i className="bi-chevron-left"></i>
              </a>
            </span>

            <span className="hs-nav-scroller-arrow-next" style={{ display: 'none' }}>
              <a className="hs-nav-scroller-arrow-link" href="">
                <i className="bi-chevron-right"></i>
              </a>
            </span>

          </div>

        </div>
        <div className="card">

          <div className="card-header card-header-content-sm-between">
            <div className="mb-2 mb-sm-0">
              <form>

                <div className="input-group input-group-merge input-group-flush">
                  <div className="input-group-prepend input-group-text">
                    <i className="bi-search"></i>
                  </div>
                  <input id="datatableSearch" type="search" className="form-control" placeholder="Search orders" aria-label="Search orders" />
                </div>

              </form>
            </div>

            <div className="d-grid d-sm-flex justify-content-sm-end align-items-sm-center gap-2">

              <div id="datatableCounterInfo" style={{ display: 'none' }}>
                <div className="d-flex align-items-center">
                  <span className="fs-5 me-3">
                    <span id="datatableCounter">0</span>
                    Selected
                  </span>
                  <a className="btn btn-outline-danger btn-sm" href="">
                    <i className="bi-trash"></i> Delete
                  </a>
                </div>
              </div>


              <div className="dropdown">
                <button type="button" className="btn btn-white w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                  <i className="bi-table me-1"></i> Columns <span className="badge bg-soft-dark text-dark rounded-circle ms-1">5</span>
                </button>

                <div className="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown" style={{ width: 15 + 'rem' }}>
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-grid gap-3">

                        <label className="row form-check form-switch" htmlFor="toggleColumn_name">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Name</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_name" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_email">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">E-mail</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_email" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_phone">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Phone</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_phone" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_country">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Country</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_country" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_account_status">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Account status</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_account_status" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_orders">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Orders</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_orders" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_total_spent">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Total spent</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_total_spent" />
                          </span>
                        </label>



                        <label className="row form-check form-switch" htmlFor="toggleColumn_last_activity">
                          <span className="col-8 col-sm-9 ms-0">
                            <span className="me-2">Last activity</span>
                          </span>
                          <span className="col-4 col-sm-3 text-end">
                            <input type="checkbox" className="form-check-input" id="toggleColumn_last_activity" />
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



          <div className="table-responsive datatable-custom">
            <table id="datatable" className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options='{
                "columnDefs": [{
                    "targets": [0],
                    "orderable": false
                  }],
                "order": [],
                "info": {
                  "totalQty": "#datatableWithPaginationInfoTotalQty"
                },
                "search": "#datatableSearch",
                "entries": "#datatableEntries",
                "pageLength": 15,
                "isResponsive": false,
                "isShowPaging": false,
                "pagination": "datatablePagination"
              }'>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="table-column-pe-0">
                    SL No.
                  </th>
                  <th className="table-column-ps-0">Vendor Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {vendorLists ? vendorLists.map((item, i) =>

                  <tr key={item._id}>
                    <td className="table-column-pe-0">
                      {i + 1}
                    </td>
                    <td className="table-column-ps-0">
                      {item.vendorName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <div className="btn-group" role="group">

                        <a data-bs-toggle="modal" data-bs-target="#whmodal"
                          className="btn btn-white btn-sm" href='#'
                          onClick={(event) => handleViewRecord(event, item._id)}
                        >
                          {" "}
                          <i className="bi-pencil-fill me-1">
                            {" "}
                            View
                          </i>{" "}
                        </a>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty"
                            id="productsEditDropdown1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          ></button>

                          <div
                            className="dropdown-menu dropdown-menu-end mt-1"
                            aria-labelledby="productsEditDropdown1"
                          >

                            <button
                              className="dropdown-item"
                              onClick={(event) => handleEditRecord(event, item._id)}>
                              <i className="bi-pencil-fill dropdown-item-icon">
                                {" "}
                              </i>{" "}
                              Edit
                            </button>

                            <button
                              className="dropdown-item"

                              onClick={(event) =>
                                handleDeleteRecord(
                                  event,
                                  item._id
                                )
                              }
                            >
                              <i className="bi-trash dropdown-item-icon">
                                {" "}
                              </i>{" "}
                              Delete
                            </button>

                          </div>
                        </div>


                      </div>
                    </td>

                  </tr>
                ) : "Data Not Found"
                }
              </tbody>
            </table>
          </div>



          <div className="card-footer">
            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
              <div className="col-sm mb-2 mb-sm-0">
                <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                  <span className="me-2">Showing:</span>


                  <div className="tom-select-custom">
                    <select id="datatableEntries" className="js-select form-select form-select-borderless w-auto" autoComplete="off" data-hs-tom-select-options='{
                          "searchInDropdown": false,
                          "hideSearch": true
                        }'>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
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



      <div className="modal fade" id="whmodal" tabIndex="-1" aria-labelledby="whModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="whModalLabel">Vendor Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body row">
              <div className='col-md-6'>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Vendor Name</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["vendorName"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Email</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["email"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Phone</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["phone"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company Name</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyName"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company Phone</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyPhone"]}</li>
                </ul>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company Email</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyEmail"]}</li>
                </ul>
              </div>

              <div className='col-md-6'>
                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company CIN</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyCIN"]}</li>
                </ul>

                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company GSTIN</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyGSTIN"]}</li>
                </ul>

                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company Web URL</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyWebsiteURL"]}</li>
                </ul>

                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company Address</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyAddress"]}</li>
                </ul>

                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company State</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyState"]}</li>
                </ul>

                <ul className="list-group list-group-horizontal p-2">
                  <li className="list-group-item w-50"><b>Company City</b></li>
                  <li className="list-group-item w-50">{singleFetchRecord["companyCity"]}</li>
                </ul>

              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Vendors