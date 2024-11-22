import { Link } from "react-router-dom";

import ButtonBlack from "./ui/Buttons";
import { ButtonWhite } from "./ui/Buttons";

const Navigation = ({ openModal, setUserMode }) => {
  return (
    <header className="w-full py-[.5rem] px-[2rem] max-sm:px-2 text-black fixed top-0 left-0 border z-20 backdrop-blur-2xl">
      <div className="w-full flex justify-between max-sm:justify-around items-center">
        <div className="hover:cursor-pointer">
          <Link to="/home">
            <h1 className="font-bold text-2xl">LOGO</h1>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          {/* <ul>
            <ButtonBlack
              onClick={() => {
                setUserMode("login");
                openModal();
              }}
            >
              LogIn
            </ButtonBlack>
          </ul>
          <ul>
            <ButtonWhite
              onClick={() => {
                setUserMode("signup");
                openModal();
              }}
            >
              SignUp
            </ButtonWhite>
          </ul> */}
          <ul>
            <Link to="/login">
              <ButtonBlack>LogIn</ButtonBlack>
            </Link>
          </ul>
          <ul>
            <Link to="/signup">
              <ButtonWhite>SignUp</ButtonWhite>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
