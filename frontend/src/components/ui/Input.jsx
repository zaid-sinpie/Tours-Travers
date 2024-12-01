import React from "react";

const Input = ({ id, type = "text", title }) => {
  return (
    <div className="flex flex-col justify-center items-start w-full gap-2">
      <label htmlFor="email">{title}</label>
      <input
        required
        type={type}
        id={id}
        name={id}
        className="w-full px-2 py-1 outline-none border border-inactive rounded-md"
      />
    </div>
  );
};

export default Input;
