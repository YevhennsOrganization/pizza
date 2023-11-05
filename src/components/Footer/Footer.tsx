import React, { FC } from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Container from '@/components/Container/Container';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import css from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <Container>
        <FooterNavigation />
        <div className={css.contactsWrapper}>
          <div className={css.socialSet}>
            <a
              className={css.socialLink}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="facebook"
            >
              <BsFacebook />
            </a>
            <a
              className={css.socialLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="instagram"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <p className={css.copyright}>
          &copy; 2023 “Nostra pizza” LLC, м. Дніпро. Всі права захищено.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
