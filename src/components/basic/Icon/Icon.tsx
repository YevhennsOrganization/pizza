import React, { FC } from 'react';
import css from './Icon.module.scss';
import { cn } from '../../../helpers/combineClasses';

interface Props {
  iconWidth: number | undefined;
  iconHeight: number | undefined;
  svg: TypeIcon | undefined;
  color?: 'main' | 'white';
}

const Icon: FC<Props> = ({ iconWidth, iconHeight, svg, color = 'main' }) => {
  return (
    <svg
      className={cn(css.svg, css[color])}
      width={iconWidth}
      height={iconHeight}
    >
      <use href={`/sprite.svg#${svg}`} />
    </svg>
  );
};

export default Icon;
