import React, { FC, HTMLProps, ReactNode } from 'react';
import css from './Button.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  type: 'submit' | 'button';
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, onClick, type, ...props }) => {
  return (
    <button type={type} className={css.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
