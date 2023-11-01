import React, { FC } from 'react';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import SimpleMap from '../GoogleMap/GoogleMap';
import css from './Addresses.module.scss';

const Addresses: FC = () => {
  return (
    <Section className={css.wrapper}>
      <Container className={css.container}>
        <div>
          <address>
            <p>Наші адреси:</p>
            <p>м. Дніпро, пр. Богдана Хмельницького 118Д</p>
            <p>м. Дніпро, Зоряний бульвар 1А</p>
            <p>м. Дніпро, вулиця Титова 36</p>
          </address>
        </div>
        <SimpleMap />
      </Container>
    </Section>
  );
};

export default Addresses;
