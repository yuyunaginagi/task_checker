import axiosBase from "axios";

type action = "fetchTasks" | "createTasks";

const api = axiosBase.create({
  baseURL: "http://localhost:3001/tasks",
  responseType: "json",
});

export const taskRequest: (action: action) => any = (action: action) => {

};