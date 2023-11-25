import React, { FC } from 'react';
import Link from 'next/link';
import css from './Logo.module.scss';
import Icon from '@/UI/basic/Icon/Icon';

const Logo: FC = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Icon svg="logo" iconWidth={274} iconHeight={95} />
    </Link>
  );
};

export default Logo;
