import React from 'react';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';
import Head from 'next/head';

const Favorite: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pizza - favorite</title>
      </Head>
      <Section>
        <Container>
          <div>
            <Heading>Улюблене</Heading>
            <p>Сторінка в розробці</p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Favorite;
