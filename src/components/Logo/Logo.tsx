import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import css from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Image
        src={'/mainLogo.svg'}
        alt="logo"
        width={274}
        height={95}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
