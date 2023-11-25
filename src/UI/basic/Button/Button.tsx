import React, { FC, HTMLProps, PropsWithChildren } from 'react';
import css from './Button.module.scss';

interface Props extends HTMLProps<PropsWithChildren<HTMLButtonElement>> {
  type: 'submit' | 'button';
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
