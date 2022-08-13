import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginSignupModal = (props) => {
  const [stat, setStat] = useState("login");

  // if (stat === "login") {
  //   return (<LoginForm stateChanger={newState} />);
  // } else {
  //   return (<SignupForm stateChanger={newState} />);
  // }
  return (
    <>
      <div
        className="modal fade"
        id="LSModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        {stat === "login" && <LoginForm stateChanger={setStat} />}
        {stat === "signup" && <SignupForm stateChanger={setStat} />}

      </div>
    </>
  );
};

LoginSignupModal.propTypes = {};

export default LoginSignupModal;
