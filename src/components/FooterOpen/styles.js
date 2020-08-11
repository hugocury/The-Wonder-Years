import styled from 'styled-components';
import LogoWonder from '../LogoWonder';

const FooterWonder = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12rem;
  background-color: var(--color-black);
  color: var(--color-gray-light);
  padding: 2px 30px;
  border-top: 3px solid var(--color-yellow);

  & > ${LogoWonder} {
    height: 50px;
    margin-bottom: 1rem;
  }
`;

export default FooterWonder;