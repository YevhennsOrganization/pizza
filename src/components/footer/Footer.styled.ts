import styled from 'styled-components';

export const ScFooter = styled.footer`
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;
export const SocialLink = styled.a`
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #1976d2;
  }
`;
