import React, { useContext, useState } from "react";
import { Select } from "../../components/select";
import { TaskType } from "../../interfaces/TaskType";
import { taskRequest } from "../../requests/taskRequest";
import { DataContext } from "../../pages/home";
import "./style.css";

interface Props {
  handleClose: () => void;
  initialValue?: number;
}

export const TaskBody = (props: Props) => {
  const { data, dispatch } = useContext(DataContext);
  const [title, setTitle] = useState<string>("");
  const [genreId, setGenreId] = useState<number>(1);
  const [explanation, setExplanation] = useState<string>("");
  const [deadlineDate, setDeadlineDate] = useState<string>("");

  const handleChangeGenre = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreId(Number(event.target.value));
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeExplanation = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setExplanation(event.target.value);
  };

  const handleChangeDeadlineDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeadlineDate(event.target.value);
  };

  const onClickSubmit = async () => {
    const newData = {
      id: 0,
      name: title,
      genreId: genreId,
      explanation: explanation,
      deadlineDate: deadlineDate,
      status: 0,
    };
    try {
      const tasks: TaskType[] = await taskRequest("createTasks", {
        data: newData,
      });
      dispatch({ type: "tasksUpdate", payload: { task: task } });
    } catch (err: any) {
      console.log(err.message);
    }
    props.handleClose();
  };

  return (
    <form className="modal_body">
      <h2 className="input_menu">タスクを追加</h2>
      <div>
        <h4 className="input_title">ジャンル</h4>
        <div className="task_genre">
          <Select
            genres={data.genresData}
            changeSelect={handleChangeGenre}
            initialValue={genreId}
          />
        </div>
        <h4 className="input_title">タイトル</h4>
        <input type="text" />
        <h4 className="input_title">説明文</h4>
        <textarea />
        <h4 className="input_title">期限</h4>
        <input
          className="input_date"
          type="date"
          value={deadlineData}
          onChange={handleChangeDeadlineData}
        />
      </div>
      <input
        className="input_submit"
        type="button"
        value="送信"
        onClick={onClickSubmit}
      />
    </form>
  );
};