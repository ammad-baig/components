import React from "react";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input  type={props.type } onChange={props.onChange} value={props.value} placeholder={props.placehrseaeolder} />
    </div>
  );
};

export default Input;
