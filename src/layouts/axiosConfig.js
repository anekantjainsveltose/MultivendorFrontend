import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.154.225.110:5000/api/admin",
});

export default instance;
