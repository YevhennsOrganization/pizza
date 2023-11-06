import React, { FC } from 'react';
import Section from '../common/Section/Section';
import Container from '../common/Container/Container';
import SimpleMap from '../GoogleMap/GoogleMap';
import css from './Addresses.module.scss';

const Addresses: FC = () => {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <address>
            <p>Наші адреси:</p>
            <p>м. Дніпро, пр. Богдана Хмельницького 118Д</p>
            <p>м. Дніпро, Зоряний бульвар 1А</p>
            <p>м. Дніпро, вулиця Титова 36</p>
          </address>
          <SimpleMap />
        </div>
      </Container>
    </Section>
  );
};

export default Addresses;
