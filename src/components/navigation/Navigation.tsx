import Link from 'next/link';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link href={'/'}>Новинки</Link>
      <Link href={'/pizza'}>Піци</Link>
      <Link href={'/hotdog'}>Хот-доги</Link>
      <Link href={'/drinks'}>Напої</Link>
    </nav>
  );
};

export default Navigation;
