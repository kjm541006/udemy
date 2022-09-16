import React from "react";

export default function Input(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.labelName}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
}
