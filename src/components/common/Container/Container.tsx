import React, { FC, ReactNode, HTMLProps } from 'react';
import css from './Container.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
