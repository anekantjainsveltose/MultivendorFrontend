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
  Badge,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

class VendorList extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 90,
        filter: true,
      },

      {
        headerName: "Name",
        field: "cus_name",
        //filter: true,
        filter: "agSetColumnFilter",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Mobile",
        field: "mobile",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.mobile}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Door Number",
      //   field: "doorNo",
      //   filter: true,
      //   width: 100,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params?.data?.door_number}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Street",
        field: "street",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.street}</span>
            </div>
          );
        },
      },
      {
        headerName: "Location",
        field: "location",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.location}</span>
            </div>
          );
        },
      },
      {
        headerName: "City",
        field: "city",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.city}</span>
            </div>
          );
        },
      },
      {
        headerName: "PinCode",
        field: "pincode",
        filter: true,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params?.data?.pincode}</span>
            </div>
          );
        },
      },
      {
        headerName: "Supplier Image",
        field: "vendoor_img",
        filter: true,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <img
                className="rounded-circle mr-50"
                src={params.data?.vendoor_img}
                alt="Vendor"
                height="40"
                width="40"
              />
            </div>
          );
        },
      },
      // {
      //   headerName: "Status",
      //   field: "status",
      //   filter: true,
      //   width: 100,
      //   cellRendererFramework: (params) => {
      //     return params.value === "true" ? (
      //       <div className="badge badge-pill badge-success">
      //         {params?.data?.status}
      //       </div>
      //     ) : params.value === "false" ? (
      //       <div className="badge badge-pill badge-danger">
      //         {params?.data?.status}
      //       </div>
      //     ) : null;
      //   },
      // },
      {
        headerName: "Actions",
        field: "Actions",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <Route
                render={({ history }) => (
                  <>
                    <Eye
                      className="m-1"
                      size="25px"
                      color="green"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/vendor/viewVendor/${params?.data?._id}`
                        )
                      }
                    />
                    <Edit
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/vendor/editVendor/${params?.data?._id}`
                        )
                      }
                    />
                  </>
                )}
              />

              <Route
                render={({ history }) => (
                  <Trash2
                    className="m-1"
                    size={20}
                    color="red"
                    onClick={() => {
                      let selectedData = this.gridApi.getSelectedRows();
                      this.runthisfunction(params.data._id);
                      this.gridApi.updateRowData({ remove: selectedData });
                    }}
                  />
                )}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get("/app/vender_getlist").then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deleteproductcategory/${id}`).then((response) => {
      console.log(response);
    });
  }

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
      <>
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Suppliers List
                  </h1>
                </Col>
                <Col>
                  <Route
                    render={({ history }) => (
                      <Button
                        className="float-right"
                        color="primary"
                        onClick={() =>
                          history.push("/app/freshlist/vendor/addVendor")
                        }
                      >
                        Add Supplier
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
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
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
      </>
    );
  }
}

export default VendorList;
