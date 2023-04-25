import Link from 'next/link';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link href={'/pizza'}>Pizza</Link>
      <Link href={'/hotdog'}>Hot-Dog</Link>
    </nav>
  );
};

export default Navigation;
