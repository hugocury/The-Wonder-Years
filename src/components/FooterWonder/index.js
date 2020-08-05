import styled from 'styled-components';
import LogoWonder from '../LogoWonder';

const FooterWonder = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14rem;
  background-color: var(--color-black-dark);
  color: var(--color-light-gray);
  padding: 9px 20px;
  border-top: 3px solid var(--color-dark-turquoise);

  & > ${LogoWonder} {
    margin-bottom: 20rem;
  }
`;

export default FooterWonder;