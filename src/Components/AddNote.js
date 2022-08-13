import React, { useContext, useState } from "react";
import NoteContext from "../Contexts/notes/NoteContext";
import cartoon from "./cartoon.png";
import CustomModal from "./CustomModal";
import LoginSignupModal from "./LoginSignupModal";
// import NoteFormModal from "./NoteFormModal";

const AddNote = () => {
  // const [first, setfirst] = useState(second)
  const contextProps = useContext(NoteContext);
  // useEffect(() => {
  //   a.updateState();
  // }, []);
  const [modalDisplay, setModalDisplay] = useState(false);

  

  return (
    <div className="row container-fluid py-3 justify-content-between ">
      <div className="col-6">
        <h1 className="text-start"><span className="logo-start">cloud</span><span className="logo-end">Note</span></h1>
        <h3 className="text-start">Keep your notes with you</h3>
        <p className="text-start lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          nihil deserunt architecto expedita earum assumenda ducimus, debitis
          similique, molestiae temporibus quidem ut aliquam quos nulla amet
          quaerat omnis maxime in similique, molestiae temporibus quidem ut
          aliquam quos nulla amet quaerat omnis maxime in similique, molestiae
          temporibus quidem ut aliquam quos nulla amet quaerat omnis maxime in
        </p>
        <button
          className="btn btn-prime"
          data-bs-toggle={contextProps.loginStatus ? "" : "modal"}
          data-bs-target={contextProps.loginStatus ? "" : "#LSModal"}
          onClick={() => setModalDisplay(true)}
        >
          {contextProps.loginStatus
            ? "Add a note"
            : "Login and start adding notes"}
        </button>
        {/* <NoteFormModal name="Add a new note" key="addNote" /> */}
        {contextProps.loginStatus && (
          <CustomModal
            onClose={() => setModalDisplay(false)}
            status={modalDisplay}
            name="Add a new note"
            key="new"
          />
        )}
        {!contextProps.loginStatus && <LoginSignupModal />}
      </div>
      <div className="col-4 d-flex justify-content-center">
        <img
          src={cartoon}
          alt=""
          style={{ height: "auto", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default AddNote;
