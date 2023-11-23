import React, { FC, HTMLProps, PropsWithChildren } from 'react';
import css from './Section.module.scss';

interface Props extends HTMLProps<PropsWithChildren<HTMLElement>> {}

const Section: FC<Props> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
