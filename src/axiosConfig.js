import axios from "axios";

const instance = axios.create({
  // baseURL: "http://35.154.86.59/api/admin",
  // baseURL: "http://13.127.52.128:8000",
  baseURL: "http://13.234.217.170:5000/",
});

export default instance;
