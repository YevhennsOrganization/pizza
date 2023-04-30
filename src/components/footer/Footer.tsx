import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as SC from '../container/Container';
import { ContactsWrapper, ScFooter, SocialLink } from './Footer.styled';

const Footer = () => {
  return (
    <ScFooter>
      <SC.Container>
        <ContactsWrapper>
          <address>вул.Альвінського 1</address>
          <Stack direction="row" spacing={1}>
            <SocialLink
              href="https://www.facebook.com/profile.php?id=100090698343559"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/xata_magnata/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon />
            </SocialLink>
          </Stack>
        </ContactsWrapper>
        <p>&copy; 2023 Компанія Хата-Магната. Всі права захищені.</p>
      </SC.Container>
    </ScFooter>
  );
};

export default Footer;
