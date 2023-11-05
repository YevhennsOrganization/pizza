import React, { FC } from 'react';
import css from './Button.module.scss';
import { IconType } from 'react-icons';

interface Props {
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
