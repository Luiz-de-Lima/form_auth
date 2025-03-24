import React from "react";

export const Input = (props) => {
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      />
    </>
  );
};
