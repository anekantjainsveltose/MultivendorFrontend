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

export class EditTransections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      brand_img: "",
      status: "",
      selectedFile: null,
      selectedName: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  handleChange = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    // console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewone_brand/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
          name: response.data.data.brand_name,
          desc: response.data.data.desc,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("brand_name", this.state.name);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_brand/${id}`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/transactions/TransectionsList");
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
                Edit Transection
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push(
                        "/app/freshlist/transactions/TransectionsList"
                      )
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
                <Col lg="6" md="6" className="mb-1">
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Branch Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Description</Label>
                  <Input
                    type="text"
                    placeholder="Description"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    onChange={this.onChangeHandler}
                  ></CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-1">Status</Label>
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
                  Update Transection
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditTransections;
