import Footer from '../footer/Footer';
import Header from '../header/Header';
import css from './Layout.module.css';

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
