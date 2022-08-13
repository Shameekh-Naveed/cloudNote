import React,{useContext} from "react";
import NoteContext from "../Contexts/notes/NoteContext";
import LoginSignupModal from './LoginSignupModal'
import LogoutModal from "./LogoutModal";

const Navbar = () => {

  const context = useContext(NoteContext)

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <span className="logo-start">cloud</span><span className="logo-end">Note</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item mx-4">
              <button
                className="btn nav-link btn-prime"
                data-bs-toggle="modal"
                data-bs-target={context.loginStatus?'#LogoutModal':"#LSModal"}
              >
                {context.loginStatus? "Logout":"Login"}
              </button>
              {/* <LogoutModal/> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {context.loginStatus? <LogoutModal/>:<LoginSignupModal/>}
    </>
  );
};

export default Navbar;
