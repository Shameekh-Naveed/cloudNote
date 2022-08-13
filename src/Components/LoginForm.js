import React, { useState, useContext } from "react";
import NoteContext from "../Contexts/notes/NoteContext";


const LoginForm = (props) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const contextProps = useContext(NoteContext);

  const handleSubmit = () => {
    
    contextProps.login(form);
    setForm({ name: "", email: "", password: "" });

  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    // description = e.target.value;
  };

  return (
    <>
      {/* <!-- Modal --> */}
      {/* <div
        className="modal"
        id="LSModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      > */}
      <div className="modal-dialog">
        <div className="modal-content text-start">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Login
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                  value={form.password}
                />
              </div>
            </form>
          </div>
          <div>
            <p>
              Dont have an account?
              <button onClick={() => props.stateChanger("signup")}>
                Signup
              </button>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button disabled={form.email.length < 1 || form.password.length < 1} type="submit" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LoginForm;
