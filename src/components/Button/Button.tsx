import React, { FC, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import css from './Button.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  typeSubmit?: boolean;
  Icon?: IconType;
  children: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ typeSubmit = true, Icon, children, onClick }) => {
  return (
    <button
      type={typeSubmit ? 'submit' : 'button'}
      className={css.button}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
