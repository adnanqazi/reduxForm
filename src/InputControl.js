import React, { Component } from "react";

const log = (input) => console.log(JSON.stringify(input));

export const input = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {

  return (
	 <div>
      <input onChange={log(rest)} {...input} type={type} placeholder={placeholder} id={id} />
      {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
    </div>
  );
};