import { useImperativeHandle, useRef, forwardRef, useState } from "react";
import { createPortal } from "react-dom";

const LoginPop = forwardRef(function LoginPop({ id, children }, ref) {
  const [userState, setUserState] = useState(false);
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
      className="border-none rounded-lg p-8 m-auto bg-white relative transition ease-out duration-350 animate-slide-in"
    >
      {children}
      <button onClick={CloseModal} className="mt-4 text-red-500">
        Close
      </button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default LoginPop;
