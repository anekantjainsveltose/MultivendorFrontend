import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
// import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import { Route } from "react-router-dom";
import "../../../../assets/scss/pages/users.scss";

class DealOfDay extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 150,
        filter: true,
      },
      {
        headerName: "Image",
        field: "product_img",
        filter: false,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className="rounded-circle  mr-4"
                src={params.data?.product_img}
                alt=" brand"
                height="40"
                width="40"
              />
            </div>
          );
        },
      },
      {
        headerName: "Title",
        field: "product",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              <span>{params.data.product?.item_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Duration",
        field: "product_price",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="">
              <span>{params.data.product_price}</span>
            </div>
          );
        },
      },
      {
        headerName: "Active Product",
        field: "product_qty",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className=" mr-4">
              <span>{params.data.product_qty}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success ">
              {params.data.status}
            </div>
          ) : params.value === "Inactive" ? (
            <div className="badge badge-pill badge-danger">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Edit
                className="mr-50"
                size={15}
                onClick={() =>
                  history.push(
                    `/app/freshlist/flashSale/editFlashSale/${params.data._id}`
                  )
                }
              />
              <Trash2
                size={15}
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  // async componentDidMount() {
  //   await axiosConfig.get("/allbundleoffer").then((response) => {
  //     let rowData = response.data.data;
  //     console.log(rowData);
  //     this.setState({ rowData });
  //   });
  // }

  // async runthisfunction(id) {
  //   console.log(id);
  //   await axiosConfig.get(`/delbundleoffer/${id}`).then((response) => {
  //     console.log(response);
  //   });
  // }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  DealOfDay
                </h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className="btn btn-danger float-right"
                      onClick={() =>
                        history.push("/app/freshlist/flashSale/addFlashSale")
                      }
                    >
                      Add Product
                    </Button>
                  )}
                />
              </Col>
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default DealOfDay;

// import React from "react";
// import {
//     Card, CardBody, Input, Row, Col, Button, UncontrolledDropdown,
//     DropdownMenu, DropdownItem, DropdownToggle,
// } from "reactstrap";
// // import axiosConfig from "../../../../axiosConfig";
// import axios from "axios";
// import { ContextLayout } from "../../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
// import { history } from "../../../../history";
// import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import "../../../../assets/scss/pages/users.scss";
// import Deal from "./Deal";

// class DealOfDay extends React.Component {
//     state = {
//         rowData: [],
//         paginationPageSize: 20,
//         currenPageSize: "",
//         getPageSize: "",
//         defaultColDef: {
//             sortable: true,
//             editable: true,
//             resizable: true,
//             suppressMenu: true,
//         },
//         columnDefs: [
//             {
//                 headerName: "S.No",
//                 valueGetter: "node.rowIndex + 1",
//                 field: "node.rowIndex + 1",
//                 width: 150,
//                 filter: true,
//             },
//             {
//                 headerName: "Title",
//                 field: "customerId",
//                 filter: true,
//                 width: 200,
//                 cellRendererFramework: (params) => {
//                     return (
//                         <div>
//                             <span>{params.data.customerId}</span>
//                         </div>
//                     );
//                 },
//             },

//             {
//                 headerName: "Product Info",
//                 field: "mobile",
//                 filter: true,
//                 width: 200,
//                 cellRendererFramework: (params) => {
//                     return (
//                         <div>
//                             <span>{params.data.mobile}</span>
//                         </div>
//                     );
//                 },
//             },

//             {
//                 headerName: "Actions",
//                 field: "sortorder",
//                 field: "transactions",
//                 width: 100,
//                 cellRendererFramework: (params) => {
//                     return (
//                         <div className="actions cursor-pointer">
//                             {/* <Eye
//                                 className="mr-50"
//                                 size="25px"
//                                 color="green"
//                                 onClick={() =>
//                                     history.push(`/app/customer/viewCustomer/${params.data._id}`)}
//                             /> */}
//                             <Edit
//                                 className="mr-50"
//                                 size="25px"
//                                 color="blue"
//                                 onClick={() => history.push("/app/freshlist/dealofday/editDealOfDay")}
//                             />
//                             <Trash2
//                                 className="mr-50"
//                                 size="25px"
//                                 color="red"
//                                 onClick={() => {
//                                     let selectedData = this.gridApi.getSelectedRows();
//                                     this.runthisfunction(params.data._id);
//                                     this.gridApi.updateRowData({ remove: selectedData });
//                                 }}
//                             />
//                         </div>
//                     );
//                 },
//             },
//         ],
//     };
//     // async componentDidMount() {
//     //     await axios.get(`http://35.154.225.110:5000/api/user/view_onecust/${id}`)
//     //         .then((response) => {
//     //             let rowData = response.data.data;
//     //             console.log(rowData);
//     //             this.setState({ rowData });
//     //         });
//     // }
//     // async componentDidMount() {
//     //     await axios
//     //         .get("http://35.154.225.110:5000/api/user/allcustomer")
//     //         .then((response) => {
//     //             let rowData = response.data.data;
//     //             console.log(rowData);
//     //             this.setState({ rowData });
//     //         });
//     // }
//     // async componentDidMount() {
//     //   let { id } = this.props.match.params;
//     //   await axios
//     //     .get(`/http://35.154.225.110:5000/api/user/allcustomer/${id}`, {
//     //       headers: {
//     //         "auth-adtoken": localStorage.getItem("auth-adtoken"),
//     //       },
//     //     })}
//     // async runthisfunction(id) {
//     //     console.log(id);
//     //     await axios.get(`http://35.154.225.110:5000/api/user/delcustomer/${id}`).then(
//     //         (response) => {
//     //             console.log(response);
//     //         },
//     //         (error) => {
//     //             console.log(error);
//     //         }
//     //     );
//     // }

//     onGridReady = (params) => {
//         this.gridApi = params.api;
//         this.gridColumnApi = params.columnApi;
//         this.setState({
//             currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//             getPageSize: this.gridApi.paginationGetPageSize(),
//             totalPages: this.gridApi.paginationGetTotalPages(),
//         });
//     };
//     updateSearchQuery = (val) => {
//         this.gridApi.setQuickFilter(val);
//     };
//     filterSize = (val) => {
//         if (this.gridApi) {
//             this.gridApi.paginationSetPageSize(Number(val));
//             this.setState({
//                 currenPageSize: val,
//                 getPageSize: val,
//             });
//         }
//     };
//     render() {
//         const { rowData, columnDefs, defaultColDef } = this.state;
//         return (
//             console.log(rowData),
//             (
//                 <Row className="app-user-list">
//                     <Col sm="12">
//                         <Col>
//                             <h1 sm='12'>
//                                 <Deal />
//                             </h1>
//                         </Col>
//                     </Col>
//                     <Col sm="12">
//                         <Card>
//                             <CardBody>
//                                 <Row>
//                                     <Col>
//                                         <h3 className="float-left">
//                                             Deal Of the Day
//                                         </h3>
//                                     </Col>
//                                 </Row>
//                                 {this.state.rowData === null ? null : (
//                                     <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                                         <div className="d-flex flex-wrap justify-content-between align-items-center">
//                                             <div className="mb-1">
//                                                 <UncontrolledDropdown className="p-1 ag-dropdown">
//                                                     <DropdownToggle tag="div">
//                                                         {this.gridApi
//                                                             ? this.state.currenPageSize
//                                                             : "" * this.state.getPageSize -
//                                                             (this.state.getPageSize - 1)}{" "}
//                                                         -{" "}
//                                                         {this.state.rowData.length -
//                                                             this.state.currenPageSize *
//                                                             this.state.getPageSize >
//                                                             0
//                                                             ? this.state.currenPageSize *
//                                                             this.state.getPageSize
//                                                             : this.state.rowData.length}{" "}
//                                                         of {this.state.rowData.length}
//                                                         <ChevronDown className="ml-50" size={15} />
//                                                     </DropdownToggle>
//                                                     <DropdownMenu right>
//                                                         <DropdownItem
//                                                             tag="div"
//                                                             onClick={() => this.filterSize(20)}
//                                                         >
//                                                             20
//                                                         </DropdownItem>
//                                                         <DropdownItem
//                                                             tag="div"
//                                                             onClick={() => this.filterSize(50)}
//                                                         >
//                                                             50
//                                                         </DropdownItem>
//                                                         <DropdownItem
//                                                             tag="div"
//                                                             onClick={() => this.filterSize(100)}
//                                                         >
//                                                             100
//                                                         </DropdownItem>
//                                                         <DropdownItem
//                                                             tag="div"
//                                                             onClick={() => this.filterSize(134)}
//                                                         >
//                                                             134
//                                                         </DropdownItem>
//                                                     </DropdownMenu>
//                                                 </UncontrolledDropdown>
//                                             </div>

//                                         </div>
//                                         <ContextLayout.Consumer>
//                                             {(context) => (
//                                                 <AgGridReact
//                                                     gridOptions={{}}
//                                                     rowSelection="multiple"
//                                                     defaultColDef={defaultColDef}
//                                                     columnDefs={columnDefs}
//                                                     rowData={rowData}
//                                                     onGridReady={this.onGridReady}
//                                                     colResizeDefault={"shift"}
//                                                     animateRows={true}
//                                                     floatingFilter={false}
//                                                     pagination={true}
//                                                     paginationPageSize={this.state.paginationPageSize}
//                                                     pivotPanelShow="always"
//                                                     enableRtl={context.state.direction === "rtl"}
//                                                 />
//                                             )}
//                                         </ContextLayout.Consumer>
//                                     </div>
//                                 )}
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row >
//             )
//         );
//     }
// }
// export default DealOfDay;
