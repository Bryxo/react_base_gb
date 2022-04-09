import React from "react";

export const ClearButton = (props) => {
  return <button className='btn_clear' onClick={props.click}>{props.name}</button>;
}