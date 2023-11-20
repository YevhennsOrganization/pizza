import React, { FC, PropsWithChildren } from 'react';
import css from './Section.module.scss';

interface Props extends PropsWithChildren {}

const Section: FC<Props> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
