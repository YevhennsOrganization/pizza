import React from 'react';
import { MainTitle } from './Heading.styled';

interface  Props {
  heading: string;
}

const Heading: React.FC<Props> = ({ heading }) => {
  return <MainTitle>{heading}</MainTitle>;
};

export default Heading;
