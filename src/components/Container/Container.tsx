import React, { FC, ReactNode } from 'react';

import css from './Container.module.scss';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
