import React, {useContext } from "react";
import NoteContext from "../Contexts/notes/NoteContext";
import "./CustomModal.css";

const DeleteModal = (props) => {
  const id = props.id;
  const contextProps = useContext(NoteContext);

  if (props.status === false) {
    return null;
  }
  return (
    <>
    <div className="container-fluid m-container">
      <div className="m-header"><h3>Delete Note</h3><hr/></div>
      <div className="m-body">
        <p>
          Are you sure you want to delete this note. You will not be able to
          retrieve it
        </p>
        <hr/>
      </div>
      <div className="m-footer d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={props.onClose}
        >
          Close
        </button>
        <button
          onClick={() => contextProps.deleteNote(id)}
          type="submit"
          className="btn btn-primary mx-2"
        >
          Submit
        </button>
      </div>
    </div>
    <div className="overlay"></div>
    </>
  );
};

export default DeleteModal;
