
import * as SC from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <SC.NavList>
        <li>
          <SC.NavLink href={'/'}>Новинки</SC.NavLink>
        </li>
        <li>
          <SC.NavLink href={'/pizza'}>Піци</SC.NavLink>
        </li>
        <li>
          <SC.NavLink href={'/hotdog'}>Хот-доги</SC.NavLink>
        </li>
        <li>
          <SC.NavLink href={'/drinks'}>Напої</SC.NavLink>
        </li>
      </SC.NavList>
    </nav>
  );
};

export default Navigation;
