import styled from 'styled-components';
import Link from 'next/link';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  padding: 10px;
  transition: all 250ms linear;
  display: flex;
  &:hover {
    transform: scale(1.1);
  }
`;
