import { useState, useRef } from "react";

import { Outlet } from "react-router-dom";

import Navigation from "../Navigation.jsx";
import Modal from "../ui/Modal.jsx";

const Root = () => {
  const [userMode, setUserMode] = useState("");
  const dialog = useRef();

  function openModal() {
    dialog.current.open();
  }

  return (
    <>
      <Navigation setUserMode={setUserMode} openModal={openModal} />
      <Outlet />
      <Modal userMode={userMode} ref={dialog} />
    </>
  );
};

export default Root;
