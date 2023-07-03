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
import { CloudLightning } from "react-feather";

export class ViewWarehouse extends Component {
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
    console.log(this.state);
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

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewonecategory/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
          category_name: response.data.data.category_name,
          type: response.data.data.type,
          feature: response.data.data.feature,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View WareHouse
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/freshlist/warehouse/warehouseList")
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
                <Col lg="12" md="12">
                  <FormGroup>
                    <Label>WareHouse Name: </Label>
                    <p style={{ display: "inline-block", marginLeft: "10px" }}>
                      {/* {this.state.category_name} */}
                      WareHouse Name
                    </p>
                  </FormGroup>
                </Col>
                <Col lg="12" md="12">
                  <FormGroup>
                    <Label>Description: </Label>
                    <p style={{ display: "inline-block", marginLeft: "10px" }}>
                      {/* {this.state.category_name} */}I am WareHouse
                      Description
                    </p>
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6" className="mb-2">
                  <Label>Type:</Label>
                  <p style={{ display: "inline-block", marginLeft: "10px" }}>
                    {this.state.type}
                  </p>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Category Image: </Label>
                    <img
                      src={this.state.data?.image}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        marginLeft: "20px",
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Thumbnail:</Label>
                    <img
                      src={this.state.data?.thumbnail_img}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        marginLeft: "20px",
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Web Banner: </Label>
                    <img
                      src={this.state.data?.web_banner}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        marginLeft: "20px",
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>App Banner:</Label>
                    <img
                      src={this.state.data?.app_banner}
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                        marginLeft: "20px",
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Feature:</Label>
                  <p style={{ display: "inline-block", marginLeft: "10px" }}>
                    {this.state.feature}
                  </p>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-0">Status:</Label>
                  <p style={{ display: "inline-block", marginLeft: "10px" }}>
                    {this.state.status}
                  </p>
                </Col> */}
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default ViewWarehouse;
