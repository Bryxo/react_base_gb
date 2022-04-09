import React from "react";

export const Button = (props) => {
  return <button className="btn_published" onClick={props.click}>{props.name}</button>;
}