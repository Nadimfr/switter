import React from "react";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-gradient-to-b from-button1 to-button2 rounded-2xl cursor-pointer py-2 px-4 lg:px-7 hover:lg:px-9 hover:from-button2 hover:to-button1 duration-300"
    >
      <h2 className="text-white text-lg font-black">{props.title}</h2>
    </div>
  );
};

export default Button;
