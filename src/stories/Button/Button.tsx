import React, { FC } from 'react';
import css from './Button.module.scss';
import { IconType } from 'react-icons';

interface Props {
  type: 'submit' | 'button';
  Icon?: IconType;
  children: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ Icon, children, onClick, type }) => {
  return (
    <button className={css.button} onClick={onClick} type={type}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default Button;
