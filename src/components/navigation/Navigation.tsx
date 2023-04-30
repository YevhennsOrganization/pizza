import { Nav, ScLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <ScLink href={'/'}>Новинки</ScLink>
      <ScLink href={'/pizza'}>Піци</ScLink>
      <ScLink href={'/hotdog'}>Хот-доги</ScLink>
      <ScLink href={'/drinks'}>Напої</ScLink>
    </Nav>
  );
};

export default Navigation;
