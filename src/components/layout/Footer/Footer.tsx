import React, { FC } from 'react';
import Container from '@/components/common/Container/Container';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import css from './Footer.module.scss';
import Icon from '@/components/basic/Icon/Icon';

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
              <Icon svg="facebook" iconWidth={30} iconHeight={30} />
            </a>
            <a
              className={css.socialLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="instagram"
            >
              <Icon svg="instagram" iconWidth={30} iconHeight={30} />
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
