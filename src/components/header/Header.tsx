import Link from 'next/link';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={css.headerItem}>
        <Logo />
        <a href="tel:+3805635435464">+380546132165</a>
        <Link href={'/cart'}>
          <AddShoppingCartIcon color="primary" />
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
