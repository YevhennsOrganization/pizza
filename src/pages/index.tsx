import React from 'react';
import Head from 'next/head';
import Heading from '@/components/Heading/Heading';
import { Container } from '@/components/Container/Container';
import { Section } from '@/components/Section/Section';

export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pizza - news</title>
      </Head>
      <Section>
        <Container>
          <Heading>Новинки</Heading>
          <p>Тут може бути Ваша реклама</p>
        </Container>
      </Section>
    </>
  );
};

export default Home;
