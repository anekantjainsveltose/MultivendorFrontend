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
import { Route } from "react-router-dom";
import swal from "sweetalert";

export class AddDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      type: "",
      feature: "",
      status: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      selectedFile4: null,
      selectedName4: "",
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

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category_name", this.state.category_name);
    data.append("type", this.state.type);
    data.append("feature", this.state.feature);
    data.append("status", this.state.status);
    data.append("image", this.state.selectedFile1, this.state.selectedName1);
    data.append(
      "thumbnail_img",
      this.state.selectedFile2,
      this.state.selectedName2
    );
    data.append(
      "web_banner",
      this.state.selectedFile3,
      this.state.selectedName3
    );
    data.append(
      "app_banner",
      this.state.selectedFile4,
      this.state.selectedName4
    );

    for (var value of data.values()) {
      console.log(value);
    }
    axiosConfig
      .post(`/admin/AddDepartment`, data)
      .then((response) => {
        console.log(response);
        if (response.data.msg === "success") {
          swal("Success!", "You Data IS been Submitted", "success");
          this.props.history.push("/app/freshlist/staff/department/departmentList");
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
                Add Department
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => {
                      history.push("/app/freshlist/staff/department/departmentList");
                    }}
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Department Name</Label>
                    <Input
                      type="text"
                      placeholder="Department Name"
                      name="category_name"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Type</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="type"
                    value={this.state.type}
                    onChange={this.changeHandler}
                  >
                    <option>---Select---</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                    <option value="egg">Egg only</option>
                  </CustomInput>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Department Image </Label>
                    <CustomInput type="file" onChange={this.onChangeHandler1} />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Thumbnail</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler2} />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Web Banner </Label>
                    <CustomInput type="file" onChange={this.onChangeHandler3} />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>App Banner</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler4} />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Feature</Label>
                  <CustomInput
                    type="select"
                    placeholder="Select Type"
                    name="feature"
                    value={this.state.feature}
                    onChange={this.changeHandler}
                  >
                    <option>Select Feature</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </CustomInput>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={this.handleChange}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Deactive"
                    />
                    <span style={{ marginRight: "3px" }}>Deactive</span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Department
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddDepartment;
