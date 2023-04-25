import Image from 'next/image';
import Link from 'next/link';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <Link href={'/'} className={css.logo}>
      <Image src={'/logo.png'} alt="logo" width={96} height={96} />
      <p>XATA_MAGNATA</p>
    </Link>
  );
};

export default Logo;
