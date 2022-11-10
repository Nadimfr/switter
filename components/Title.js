import React from "react";

const Title = (props) => {
  return (
    <div className="w-1/2 lg:w-full">
      <h2 className="font-semibold text-4xl text-left ">{props.title}</h2>
      <div className="bg-secondary h-1 w-3/4 mt-2 rounded-md" />
    </div>
  );
};

export default Title;
