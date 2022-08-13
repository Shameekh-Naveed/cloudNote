import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const notes = [];
  const [notesArray, setNotesArray] = useState([]);

  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("auth_tokken") !== "" && localStorage.getItem("auth_tokken") !== null 
  );

  // localStorage.setItem('auth_tokken',false)
  // if(localStorage.getItem('auth_tokken')){
  //   setLoginStatus(true)
  //   console.log("happened")
  // }

  const fetchNotes = async () => {
    const url = `${host}/api/notes/fetchNotes`;
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        auth_tokken: localStorage.getItem("auth_tokken"),
      },
    });
    const res = await response.json();
    setNotesArray(res);
  };

  const addNote = async (note) => {
    const url = `${host}/api/notes/addNote`;
    const newNote = {
      title: note.title,
      description: note.description,
      tags: note.tags,
    };
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        auth_tokken: localStorage.getItem("auth_tokken"),
      },
      body: JSON.stringify(newNote), // body data type must match "Content-Type" header
    });
    const res = await response.json();

    const newArr = [...notesArray, res];
    setNotesArray(newArr);
  };

  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deleteNote/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        auth_tokken: localStorage.getItem("auth_tokken"),
      },
    });

    fetchNotes();
  };

  const updateNote = async (id, updatedNote) => {
    const url = `${host}/api/notes/updateNote/${id}`;
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        auth_tokken: localStorage.getItem("auth_tokken"),
      },
      body: JSON.stringify(updatedNote), // body data type must match "Content-Type" header
    });
    // const res = await response.json(updatedNote);

    fetchNotes();
  };

  const login = async (body) => {
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    if (res.status) {
      localStorage.setItem("auth_tokken", res.auth_tokken);
      setLoginStatus(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const signup = async (body) => {
    const url = `${host}/api/auth/createUser`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    if (res.status) {
      localStorage.setItem("auth_tokken", res.auth_tokken);
    } else {
      alert("Invalid Credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_tokken");
    setLoginStatus(false);
    setNotesArray([])
  };

  return (
    <NoteContext.Provider
      value={{
        notesArray,
        setNotesArray,
        deleteNote,
        addNote,
        updateNote,
        fetchNotes,
        signup,
        login,
        loginStatus,
        // setLoginStatus,
        logout,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
