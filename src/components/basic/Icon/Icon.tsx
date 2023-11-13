import React, { FC } from 'react';
import css from './Icon.module.scss';

interface Props {
  width: number;
  height: number;
  icon: TypeIcon;
}

const Icon: FC<Props> = ({ width, height, icon }) => {
  return (
    <svg className={css.svg} width={width} height={height}>
      <use href={`/sprite.svg#${icon}`} />
    </svg>
  );
};

export default Icon;
