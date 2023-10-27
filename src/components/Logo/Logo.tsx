import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Image src={'/mainLogo.png'} alt="logo" width={274} height={95} />
      <p>PIZZA</p>
    </Link>
  );
};

export default Logo;
