import React, { FC, HTMLProps } from 'react';
import css from './Heading.module.scss';

interface Props extends HTMLProps<HTMLHeadingElement> {
  children: string;
}

const Heading: FC<Props> = ({ children }) => {
  return <h1 className={css.heading}>{children}</h1>;
};

export default Heading;
