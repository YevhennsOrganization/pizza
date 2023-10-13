import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Image src={'/logo.png'} alt='logo' width={50} height={50} />
      <p>XATA_MAGNATA</p>
    </Link>
  );
};

export default Logo;
