import React, { FC } from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import * as SC from '@/components/Container/Container';
import css from './Footer.module.scss';
import FooterNavigation from './FooterNavigation/FooterNavigation';

const Footer: FC = () => {
  return (
    <footer className={css.footer}>
      <SC.Container>
        <FooterNavigation />
        <div className={css.contactsWrapper}>
          <div className={css.socialSet}>
            <a
              className={css.socialLink}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsFacebook />
            </a>
            <a
              className={css.socialLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <p className={css.copyright}>
          &copy; 2023 “Nostra pizza” LLC, м. Дніпро. Всі права захищено.
        </p>
      </SC.Container>
    </footer>
  );
};

export default Footer;
