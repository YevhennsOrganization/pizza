import React, { FC, ReactNode } from 'react';

import css from './Section.module.scss';

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

export default Section;
