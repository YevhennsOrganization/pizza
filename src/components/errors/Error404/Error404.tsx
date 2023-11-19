import React, { FC } from 'react';
import Link from 'next/link';
import css from './Error404.module.scss';

const Error404: FC = () => {
  return (
    <div className={css.wrapper}>
      <h2>404 - Page Not Found</h2>
      <Link href={'/'}>На головну</Link>
    </div>
  );
};

export default Error404;
