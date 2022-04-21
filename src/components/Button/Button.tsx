import React, { FC } from 'react';
//import Button from 'Button';
import style from './Button.module.scss';

interface ButtonProps {
  name:string;
  // disabled: boolean;
  // onButtonClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    //кнопка без библиотеки
    // <button className="btn_published" type="submit">
    //   {props.name}
    // </button>

    <button
      //variant="contained"
      type="submit"
      className={style.button}
    >
      {props.name}
    </button>

  );
};
