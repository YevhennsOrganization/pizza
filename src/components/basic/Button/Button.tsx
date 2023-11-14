import React, { FC, ReactNode } from 'react';
import css from './Button.module.scss';
import Icon from '../Icon/Icon';

interface Base {
  type: 'submit' | 'button';
  children: ReactNode;
  onClick?: () => void;
}

interface WithIcon {
  icon?: true;
  svg: TypeIcon;
  iconWidth: number;
  iconHeight: number;
  color?: 'main' | 'white';
}

interface WithoutIcon {
  icon?: false;
  svg?: never;
  iconWidth?: never;
  iconHeight?: never;
  color?: never;
}

type TSummary = Base & (WithIcon | WithoutIcon);

const Button: FC<TSummary> = ({
  children,
  onClick,
  type,
  icon = false,
  svg,
  iconWidth,
  iconHeight,
  color = 'main',
}) => {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {icon && (
        <Icon
          svg={svg}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          color={color}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
