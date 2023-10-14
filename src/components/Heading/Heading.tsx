import React from 'react';
import css from './Heading.module.scss';

interface Props {
  children: string;
}

const Heading: React.FC<Props> = ({children}) => {
  return <h1 className={css.heading}>{children}</h1>;
};

export default Heading;
