import React, { useState } from "react";
import Modal from "react-modal";
import { GenreBody } from "./genreBody";
import { TaskBody } from "./taskBody";

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  body: string;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgb(80, 80, 80, 0.8)",
  },
  content: {
    top: "10%",
    left: "60%",
    right: "50%",
    height: "75vh",
    width: "20vw",
    marginLeft: "-30vw",
    padding: "2vw 10vw",
  },
};

const renderBody = (body: string) => {
  switch (body) {
    case "taskBody":
      return <TaskBody />;
    case "genreBody":
      return <GenreBody />;
    default:
      return <div />;
  }
};

export const FormModal = (props: Props) => {

  Modal.setAppElement("#root");

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.handleClose}
        style={customStyles}
      >
        {renderBody(props.body)}
      </Modal>
    </div>
  );
};