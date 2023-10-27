import React, { FC } from 'react';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import SimpleMap from '../GoogleMaps/GoogleMaps';
import css from './Addresses.module.scss';

const Addresses: FC = () => {
  return (
    <Section className={css.wrapper}>
      <Container className={css.container}>
        <div>
          <address>
            <p>Наші адреси:</p>
            <p>м. Дніпро, вул. Центральна, 3</p>
            <p>м. Дніпро, вул. Степана Бандери, 12</p>
            <p>м. Дніпро, вул. Б. Хмельницького, 28</p>
          </address>
        </div>
        <SimpleMap />
      </Container>
    </Section>
  );
};

export default Addresses;
