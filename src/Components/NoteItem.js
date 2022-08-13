import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
// import DeleteNote from "./DeleteNote";
// import NoteFormModal from "./NoteFormModal";
import CustomModal from "./CustomModal";
import NoteContext from "../Contexts/notes/NoteContext";
import DeleteModal from "./DeleteModal";
// import NoteContext from "../Contexts/notes/NoteContext";

const NoteItem = (props) => {
  // const props = useContext(NoteContext);
  const { title, description, tags, id } = props;

  // const contextProps = useContext(NoteContext);

  const [modalDeleteDisplay, setModalDeleteDisplay] = useState(false);
  const [modalEditDisplay, setModalEditDisplay] = useState(false);

  // const updateNote = () => {
  //   const updatedNote = {

  //     title: "Totally New Note",
  //     description: "Hello this is a Totally New new note",
  //     tags: "General",
  //   };
  //   const newNotes = a.notesArray;
  //   newNotes.forEach((note) => {
  //     if (note.__id === id) {
  //       note.title = updatedNote.title;
  //       note.description = updatedNote.description;
  //       note.tags = updatedNote.tags;
  //     }
  //   });
  //   setNotesArray(newNotes);
  // };

  // const deleteNote = () => {
  //   console.log("delete Note");
  // };

  const editNote = () => {
    // noteForm.toggle()
    console.log("edit Note");
    // setModalDisply(true);
  };

  return (
    <div className="card py-2 px-2 m-2" style={{ width: "23rem" }}>
      <div className="card-body">
        <div className="d-flex align-items-center my-2">
          <h5 className="card-title flex-grow-1">{title}</h5>
          <img
            className="mx-2"
            src="https://img.icons8.com/dusk/24/000000/filled-trash.png"
            // onClick={deleteNote}
            style={{ cursor: "pointer" }}
            onClick={() => setModalDeleteDisplay(true)}
            // data-bs-toggle="modal"
            // data-bs-target="#deleteNote"
          />
          <DeleteModal
            id={id}
            onClose={() => setModalDeleteDisplay(false)}
            status={modalDeleteDisplay}
          />

          <img
            className="mx-2"
            src="https://img.icons8.com/dusk/24/000000/edit--v1.png"
            style={{ cursor: "pointer" }}
            // data-bs-toggle="modal"
            // data-bs-target="#noteForm"
            onClick={() => setModalEditDisplay(true)}
          />
          <CustomModal
            // onSubmit={contextProps.updateNote(id)}
            onClose={() => setModalEditDisplay(false)}
            status={modalEditDisplay}
            name="Edit a note"
            key={id}
            title={title}
            description={description}
            id={id}
          />
          {/* <NoteFormModal name="Edit a note" key={id} title={title} description={description}/> */}
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{tags}</h6>
        <p className="card-text ">{description}</p>
      </div>
      {/* <DeleteNote /> */}
    </div>
  );
};

// NoteItem.propTypes = {}

export default NoteItem;
