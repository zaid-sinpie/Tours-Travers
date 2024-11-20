import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

import Login from "../Login";
import Signup from "../Signup";

const LoginPop = forwardRef(function LoginPop({ userMode }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  function CloseModal() {
    dialog.current.close();
  }

  function toggleUserState() {
    setUserState((userState) => !userState);
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="border-none m-auto rounded-lg p-8 bg-white transition ease-out duration-350 animate-slide-in z-10 relative"
    >
      {" "}
      <button
        onClick={CloseModal}
        className="text-red-400 text-2xl absolute top-1 right-4"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="w-full h-full flex justify-center items-center">
        {userMode === "login" && <Login />}
        {userMode === "signup" && <Signup />}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default LoginPop;
