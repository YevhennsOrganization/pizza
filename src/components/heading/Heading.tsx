type TypeHeading = {
  heading: string;
};

const Heading = ({ heading }: TypeHeading) => {
  return <h1>{heading}</h1>;
};

export default Heading;
