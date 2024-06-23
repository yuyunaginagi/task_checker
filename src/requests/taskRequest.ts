import axiosBase from "axios";

const api = axiosBase.create({
  baseURL: "http://localhost:3001/tasks",
  responseType: "json",
});