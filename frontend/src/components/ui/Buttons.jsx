const ButtonBlack = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-2 px-4 w-20 text-white box-content bg-black hover:bg-white hover:text-black border-black border-2 rounded-l-full hover:rounded-r-full transition-all ease-in-out duration-200 font-semibold"
    >
      {children}
    </button>
  );
};

export default ButtonBlack;

export const ButtonWhite = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-2 px-4 w-20 box-content bg-black hover:bg-white text-white hover:text-black border-black border-2 rounded-r-full hover:rounded-l-full transition-all ease-in-out duration-200 font-semibold"
    >
      {children}
    </button>
  );
};

export const ButtonPlaneBlack = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-[-webkit-fill-available] px-2 py-2 text-white box-content bg-black hover:bg-white hover:text-black border-black border-2 rounded-md transition-all ease-in-out duration-200 font-semibold"
    >
      {children}
    </button>
  );
};

export const ButtonText = ({ children }) => {
  return (
    <button className="text-xl underline text-inactive hover:text-black">
      {children}
    </button>
  );
};
