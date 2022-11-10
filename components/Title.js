import React from "react";

const Title = (props) => {
  return (
    <div className={props.style}>
      <h2 className={props.textStyle}>{props.title}</h2>
      <div className={props.barStyle} />
    </div>
  );
};

export default Title;
