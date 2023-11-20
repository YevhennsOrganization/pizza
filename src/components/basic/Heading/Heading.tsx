import React, { FC, HTMLProps, PropsWithChildren } from 'react';
import css from './Heading.module.scss';

interface Props extends HTMLProps<PropsWithChildren<HTMLHeadingElement>> {}

const Heading: FC<Props> = ({ children }) => {
  return <h1 className={css.heading}>{children}</h1>;
};

export default Heading;
