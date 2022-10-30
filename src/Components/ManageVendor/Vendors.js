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
      //console.log(newdata);
      setVendorLists(newdata);
    }).catch(error => {
      console.log("error", error)
    });
  }
  const handleViewRecord = (event, id) => {
    event.preventDefault();
    navigate('/viewvendor', { state : {v_id: id} });
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

  // const handleViewRecord = (event, id) => {
  //   event.preventDefault();
  //   const collectionName = "vendorusers";
  //   event.preventDefault();
  //   ApiServices.GetSingleRecordById(id, collectionName)
  //     .then((response) => {
  //       let fetchdata = response.data.data;
  //       setSingleFetchRecord(fetchdata);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }

  const handleStatusChange = (e, id, status) => {
    e.preventDefault();
    const formData = {
      collection: "vendorusers",
      id: id,
      data: {
        isActive: status ? false : true,
      },
      meta: {
        duplicate: [],
        multiInsert: false,
      },
    };
    ApiServices.UpdateRecord(formData)
      .then((response) => {
        if (response.status == 200 && response.data.status == "success") {
          swal({
            title: "Thank you!",
            text: `Vendor ${status ? "Blocked" : "Unblocked"} successfully!!!`,
            type: "success",
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
  return (
    <>
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-md mb-2 mb-md-0">
              <h1 className="page-header-title">Vendors</h1>
            </div>
            <div className="col-md-auto">
              <Link className="btn btn-primary" to="/addvendor"><i className="bi-person-plus-fill me-1"></i> Add vendor</Link>
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
                  <input id="datatableSearch" type="search" className="form-control" placeholder="Search vendor" aria-label="Search vendor" />
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
                  <th>#</th>
                  <th>Company details</th>
                  <th>Vendor name / State</th>
                  <th>E-mail / Phone</th>   
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {vendorLists ? vendorLists.map((item, i) =>
                  <tr key={item._id}>
                    <td className="table-column-pe-0">
                      {i + 1}
                    </td>
                    <td>{item.companyName}<br/>{item.companyWebsiteURL}<br/>{item._id}</td>                   
                    <td>{item.vendorName}<br/>{item.companyState}</td>
                    <td>{item.email}<br/>{item.phone}</td>                    
                    <td>
                      <div className="btn-group" role="group">

                        {/* <a data-bs-toggle="modal" data-bs-target="#whmodal"
                          className="btn btn-white btn-sm" href='#'
                          onClick={(event) => handleViewRecord(event, item._id)}
                        >
                          {" "}
                          <i className="bi bi-eye-fill me-1">
                            {" "}
                            View
                          </i>{" "}
                        </a> */}
						
                        <a className="btn btn-white btn-sm" href='#'
                            onClick={(event) => handleViewRecord(event, item._id)}>
                            {" "}
                            <i className="bi bi-eye-fill me-1">
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
                          <div className="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown1">
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
                              onClick={(event) => handleStatusChange(event, item._id, item.isActive)}>
                              <i className="bi bi-stop-circle dropdown-item-icon">
                                {" "}
                              </i>{" "}
                              {item.isActive
                                    ? "Block"
                                    : "Unblock"}
                            </button>
                            <button
                              className="dropdown-item"
                              onClick={(event) => handleDeleteRecord(event, item._id)}>
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
    </>
  )
}
export default Vendors