import { useReducer } from "react";
import { TaskType } from "../interfaces/TaskType";

export const useFilterTasks = (): any => {

  const reducer = (tasks: TaskType[], action: filterAction) => {
    switch (action.type) {
      case "filterTask":
        return tasks;
    }
  };

  const [filteredTasks, tasksDispatch] = useReducer(reducer, initialData);
  retunr [filteredTasks, tasksDispatch];
};