import Link from 'next/link';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Container } from '../container/Container';
import { ScHeader, HeaderItem } from './Header.styled';

const Header = () => {
  return (
    <ScHeader>
      <Container>
        <HeaderItem>
          <Logo />
          <a href="tel:+3805635435464">+380546132165</a>
          <Link href={'/cart'}>
            <AddShoppingCartIcon color="primary" />
          </Link>
        </HeaderItem>
        <Navigation />
      </Container>
    </ScHeader>
  );
};

export default Header;
