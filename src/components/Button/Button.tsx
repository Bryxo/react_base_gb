import React, { FC } from 'react';
//import Button from 'Button';
import style from './Button.module.scss';

interface ButtonProps {
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button type="submit" className={style.button}>
      {props.name}
    </button>
  );
};
