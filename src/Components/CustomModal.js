import React, { useState, useContext } from "react";
import NoteContext from "../Contexts/notes/NoteContext";
import "./CustomModal.css";

const CustomModal = (props) => {
  const { name, title = "", description = "", tags = "", id } = props;
  //   console.log(description)

  const contextProps = useContext(NoteContext);

  //   const titleInital = props.title !== undefined ? props.title : "";
  //   const descriptionInital =
  //     props.description !== undefined ? props.description : "";
  //   const tagsInitial = props.tags !== undefined ? props.tags : "";

  const noteTemp = {
    title: title,
    description: description,
    tags: tags,
  };
  const [note, setNote] = useState(noteTemp);

  const handleClose = () => {
    setNote(noteTemp);
    props.onClose();
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
    // description = e.target.value;
  };

  const handleSubmit = () => {
    if (name === "Add a new note") {
      contextProps.addNote(note);
    } else {
      contextProps.updateNote(id, note);
    }
    setNote(noteTemp);
    props.onClose();
  };


  if (props.status === false) {
    return null;
  }else{

  }

  return (
    <>
    <div className="container-fluid m-container">
      <div className="m-header">
        <h3>{name}</h3>
        <hr />
      </div>
      <div className="m-body">
        <form action="">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              aria-describedby="emailHelp"
              value={note.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={note.description}
              placeholder="Give us a short description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              className="form-control"
              onChange={handleChange}
              placeholder="tags"
              value={note.tags}
              required
            />
          </div>
        </form>
        <hr />

        </div>
        <div className="m-footer d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            disabled={note.title.length < 3 || note.description.length < 5}
            onClick={handleSubmit}
            type="submit"
            className="btn btn-prime mx-2"
          >
            Submit
          </button>
      </div>
    </div>
    <div className="overlay"></div></>
  );
};

export default CustomModal;
