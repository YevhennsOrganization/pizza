import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Wrapper, Main } from './Layout.styled';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
