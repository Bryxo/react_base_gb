import React from 'react';

export const Button = (props) => {
  return (
    <button className="btn_published" type="submit">
      {props.name}
    </button>
  );
};
