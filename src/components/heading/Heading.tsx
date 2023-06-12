import React from 'react';
import { MainTitle } from './Heading.styled';

const Heading: React.FC<THeading> = ({ heading }) => {
  return <MainTitle>{heading}</MainTitle>;
};

export default Heading;
