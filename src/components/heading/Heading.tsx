import { MainTitle } from './Heading.styled';

type TypeHeading = {
  heading: string;
};

const Heading = ({ heading }: TypeHeading) => {
  return <MainTitle>{heading}</MainTitle>;
};

export default Heading;
