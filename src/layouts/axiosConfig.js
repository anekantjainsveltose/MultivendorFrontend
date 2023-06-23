import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.234.217.170/api/admin",
});

export default instance;
