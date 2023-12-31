import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { BsFillPersonFill } from "react-icons/bs";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export class EditDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      firstname: "",
      lastname: "",
      identity_type: "",
      //identity_no: "",
      phone_no: "",
      address: "",
      email: "",
      password: "",
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

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewone_drive/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          identity_type: response.data.data.identity_type,
          phone_no: response.data.data.phone_no,
          address: response.data.data.address,
          email: response.data.data.email,
          password: response.data.data.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("firstname", this.state.firstname);
    data.append("lastname", this.state.lastname);
    data.append("identity_type", this.state.identity_type);
    //data.append("identity_no", this.state.identity_no);
    data.append("phone_no", this.state.phone_no);
    data.append("address", this.state.address);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    if (this.state.selectedFile1 !== null) {
      data.append(
        "adhar_card_img",
        this.state.selectedFile1,
        this.state.selectedName1
      );
    }
    if (this.state.selectedFile2 !== null) {
      data.append(
        "driver_img",
        this.state.selectedFile2,
        this.state.selectedName2
      );
    }
    if (this.state.selectedFile3 !== null) {
      data.append(
        "identity_img",
        this.state.selectedFile3,
        this.state.selectedName3
      );
    }
    if (this.state.selectedFile4 !== null) {
      data.append(
        "regis_cardImg",
        this.state.selectedFile4,
        this.state.selectedName4
      );
    }
    if (this.state.selectedFile5 !== null) {
      data.append(
        "insuranceImg",
        this.state.selectedFile5,
        this.state.selectedName5
      );
    }
    if (this.state.selectedFile6 !== null) {
      data.append(
        "licenseImg",
        this.state.selectedFile6,
        this.state.selectedName6
      );
    }

    for (var value of data.values()) {
      console.log(value);
    }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_drive/${id}`, data)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.msg == "success") {
          swal("Success!", "Submitted Successfully", "success");
          this.props.history.push("/app/freshlist/driver/driverList");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  render() {
    return (
      <div>
        <Col sm="12">
          <Col>
            <div>
              <Card>
                <Row className="m-1">
                  <Col>
                    <h1>Edit</h1>
                  </Col>
                  <Col>
                    <Route
                      render={({ history }) => (
                        <Button
                          className=" btn btn-danger float-right"
                          onClick={() =>
                            history.push("/app/freshlist/driver/driverList")
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
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-2">
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          value={this.state.firstname}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Last Name</Label>
                        <Input
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          value={this.state.lastname}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Identity Type</Label>
                        <Input
                          type="select"
                          name="identity_type"
                          placeholder="Enter Identity Type"
                          value={this.state.identity_type}
                          onChange={this.changeHandler}
                        >
                          <option>Select ID</option>
                          <option value="Driving License">
                            Driving License
                          </option>
                          <option value="PanCard">Pan Card</option>
                          <option value="PassPort">Passport</option>
                        </Input>
                      </Col>

                      <Col lg="6" md="6" className="mb-1">
                        <Label>Identity Type Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler3}
                        ></CustomInput>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Phone No.</Label>
                        <Input
                          type="tel"
                          maxLength="10"
                          name="phone_no"
                          placeholder="Phone No"
                          value={this.state.phone_no}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Address</Label>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={this.state.address}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Aadhar Card Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler1}
                        />
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Driver Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler2}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-2 mb-1">
                      <Col>Account Information</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-2">
                        <Label>Email</Label>
                        <Input
                          type="text"
                          name="email"
                          placeholder=" Email"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder=" Password"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                      </Col>
                    </Row>
                    <Row className="mt-2 mb-1">
                      <Col>Vehicle Information</Col>
                    </Row>
                    <Row className="mb-2">
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Registration Card Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler4}
                        ></CustomInput>
                      </Col>
                      <Col lg="6" md="6" className="mb-1">
                        <Label>Insurance Policy Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler5}
                        ></CustomInput>
                      </Col>

                      <Col lg="6" md="6" className="mb-1">
                        <Label>License Image</Label>
                        <CustomInput
                          type="file"
                          onChange={this.onChangeHandler6}
                        ></CustomInput>
                      </Col>
                    </Row>

                    <Row style={{ float: "right" }}>
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
          </Col>
        </Col>
      </div>
    );
  }
}
export default EditDriver;
