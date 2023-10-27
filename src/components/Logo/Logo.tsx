import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Image src={'/mainLogo.svg'} alt="logo" width={274} height={95} />
    </Link>
  );
};

export default Logo;
