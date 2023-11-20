import React, { FC, HTMLProps, PropsWithChildren } from 'react';
import css from './Container.module.scss';

interface Props extends HTMLProps<PropsWithChildren<HTMLDivElement>> {}

const Container: FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
