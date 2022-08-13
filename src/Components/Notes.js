import React, { useEffect, useContext } from "react";
import NoteContext from "../Contexts/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {

  const props = useContext(NoteContext);
  const notes = props.notesArray;
  const fetchNotes = props.fetchNotes;

if (localStorage.getItem('auth_tokken')) {
  
}
  useEffect(() => {
    if (props.loginStatus) {
      fetchNotes();
    }
  }, [props.loginStatus]);
  // }, [notes]);

  // if (props.status === false) {
  //   return null;
  // }
  return (
    <div className="text-start">
      <h2 className="my-2 mx-2">Your Notes</h2>
      <div className="row mx-2">
        {notes.map((note) => {
          return (
            <NoteItem
              title={note.title}
              description={note.description}
              tags={note.tags}
              key={note._id}
              id={note._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
