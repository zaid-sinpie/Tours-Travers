import { Outlet } from "react-router-dom";

import Navigation from "../Navigation.jsx";
import Modal from "../ui/Modal.jsx";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Modal />
    </>
  );
};

export default Root;
