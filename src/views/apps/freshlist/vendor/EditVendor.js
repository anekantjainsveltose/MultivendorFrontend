import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";

export class EditVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      door_number: "",
      street: "",
      location: "",
      city: "",
      pincode: "",
      service_location: "",
      service_city: "",
      service_pincode: "",
      adhar_no: "",
      pancard_no: "",
      account_no: "",
      cus_name: "",
      branch: "",
      ifsc_code: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      selectedFile4: null,
      selectedName4: "",
      selectedFile5: null,
      selectedName5: "",
      selectedFile6: null,
      selectedName6: "",
    };
  }

  onChangeHandler1 = (event) => {
    this.setState({ selectedFile1: event.target.files[0] });
    this.setState({ selectedName1: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler2 = (event) => {
    this.setState({ selectedFile2: event.target.files[0] });
    this.setState({ selectedName2: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler3 = (event) => {
    this.setState({ selectedFile3: event.target.files[0] });
    this.setState({ selectedName3: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler4 = (event) => {
    this.setState({ selectedFile4: event.target.files[0] });
    this.setState({ selectedName4: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler5 = (event) => {
    this.setState({ selectedFile5: event.target.files[0] });
    this.setState({ selectedName5: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler6 = (event) => {
    this.setState({ selectedFile6: event.target.files[0] });
    this.setState({ selectedName6: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    console.log("vendor id ", id);
    axiosConfig
      .get(`/app/vender_getviewone/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          name: response.data.data.name,
          mobile: response.data.data.mobile,
          email: response.data.data.email,
          door_number: response.data.data.door_number,
          street: response.data.data.street,
          location: response.data.data.location,
          city: response.data.data.city,
          pincode: response.data.data.pincode,
          service_location: response.data.data.service_location,
          service_city: response.data.data.service_city,
          service_pincode: response.data.data.service_pincode,
          adhar_no: response.data.data.adhar_no,
          pancard_no: response.data.data.pancard_no,
          account_no: response.data.data.account_no,
          cus_name: response.data.data.cus_name,
          branch: response.data.data.branch,
          ifsc_code: response.data.data.ifsc_code,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("mobile", this.state.mobile);
    data.append("email", this.state.email);
    data.append("door_number", this.state.door_number);
    data.append("street", this.state.street);
    data.append("location", this.state.location);
    data.append("city", this.state.city);
    data.append("pincode", this.state.pincode);
    data.append("service_location", this.state.service_location);
    data.append("service_city", this.state.service_city);
    data.append("service_pincode", this.state.service_pincode);
    data.append("adhar_no", this.state.adhar_no);
    data.append("pancard_no", this.state.pancard_no);
    data.append("account_no", this.state.account_no);
    data.append("cus_name", this.state.cus_name);
    data.append("branch", this.state.branch);
    data.append("ifsc_code", this.state.ifsc_code);
    if (this.state.selectedFile1 !== null) {
      data.append(
        "vendoor_img",
        this.state.selectedFile1,
        this.state.selectedName1
      );
    }
    if (this.state.selectedFile2 !== null) {
      data.append(
        "adhar_img_front",
        this.state.selectedFile2,
        this.state.selectedName2
      );
    }
    if (this.state.selectedFile3 !== null) {
      data.append(
        "adhar_img_back",
        this.state.selectedFile3,
        this.state.selectedName3
      );
    }
    if (this.state.selectedFile4 !== null) {
      data.append(
        "pancard_img_front",
        this.state.selectedFile4,
        this.state.selectedName4
      );
    }
    if (this.state.selectedFile5 !== null) {
      data.append(
        "pancard_img_back",
        this.state.selectedFile5,
        this.state.selectedName5
      );
    }
    if (this.state.selectedFile6 !== null) {
      data.append(
        "passbook_img",
        this.state.selectedFile6,
        this.state.selectedName6
      );
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_admin_vender/${id}`, data)
      .then((response) => {
        console.log(response.data);
        if (response.data.msg === "success") {
          swal("Success!", "Submitted SuccessFull!", "success");
          this.props.history.push("/app/freshlist/vendor/vendorList");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Supplier
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className="float-right"
                    color="danger"
                    onClick={() =>
                      history.push("/app/freshlist/vendor/vendorList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <h5>Personal Information</h5>
              </Row>
              <Row className="mb-2 mt-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Mobile No.</Label>
                  <Input
                    type="number"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Company</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Company"
                    value={"Company"}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Street</Label>
                  <Input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={this.state.street}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Location</Label>
                  <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>City</Label>
                  <Input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>PinCode</Label>
                  <Input
                    type="tel"
                    name="pincode"
                    placeholder="PINCODE"
                    value={this.state.pincode}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              </Row>
              {/* <Row>
                <h5>Service Information</h5>
              </Row>
              <Row className="mb-2 mt-2">
                <Col lg="6" md="6" className="mb-1">
                  <Label>Service Location</Label>
                  <Input
                    type="text"
                    name="service_location"
                    placeholder="Service Location"
                    value={this.state.service_location}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Service City</Label>
                  <Input
                    type="text"
                    name="service_city"
                    placeholder="Service City"
                    value={this.state.service_city}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Service PinCode</Label>
                  <Input
                    type="number"
                    name="service_pincode"
                    placeholder="Service PinCode"
                    value={this.state.service_pincode}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row> */}
              <Row>
                <h5> Document Details</h5>
              </Row>
              <Row className="mb-2 mt-2">
                <Col lg="6" md="6" className="mb-1">
                  <Label>Supplier Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler1} />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Aadhar Number</Label>
                  <Input
                    type="number"
                    name="adhar_no"
                    placeholder="Aadhar Number"
                    value={this.state.adhar_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                {/* <Col lg="6" md="6" className="mb-1">
                  <Label>Aadhar Front Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler2} />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Aadhar Back Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler3} />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>PAN Card Number</Label>
                  <Input
                    type="text"
                    name="pancard_no"
                    placeholder="Pan Number"
                    value={this.state.pancard_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>PAN Card Front Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler4} />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>PAN Card Back Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler5} />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Account Number</Label>
                  <Input
                    type="text"
                    name="account_no"
                    placeholder="Account Number"
                    value={this.state.account_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Account Holder Name</Label>
                  <Input
                    type="text"
                    name="cus_name"
                    placeholder="Account Holder Name"
                    value={this.state.cus_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Branch Name</Label>
                  <Input
                    type="text"
                    name="branch"
                    placeholder="Branch Name"
                    value={this.state.branch}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>IFSC Code</Label>
                  <Input
                    type="text"
                    name="ifsc_code"
                    placeholder="IFSC Code"
                    value={this.state.ifsc_code}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Cancelled Cheque Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler6} />
                </Col> */}
              </Row>
              <Row style={{ float: "center" }}>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1 "
                >
                  Submit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditVendor;

// this is a text push
