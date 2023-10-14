import React from 'react';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as SC from '@/components/Container/Container';
import css from './Footer.module.scss';
import SimpleMap from "@/components/GoogleMaps/GoogleMaps";

const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <SC.Container>
        <SimpleMap/>
        <div className={css.contactsWrapper}>
          <address>
            м.Дніпро
            <br />
            вул.Альвінського 1
          </address>
          <Stack direction='row' spacing={1}>
            <a
              className={css.socialLink}
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FacebookIcon />
            </a>
            <a
              className={css.socialLink}
              href='https://www.instagram.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <InstagramIcon />
            </a>
          </Stack>
        </div>
        <p>&copy; 2023 Компанія Хата-Магната. Всі права захищені.</p>
      </SC.Container>
    </footer>
  );
};

export default Footer;
