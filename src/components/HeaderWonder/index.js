import styled from 'styled-components';
import ButtonWonder from '../ButtonWonder';

const HeaderWonder = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: var(--color-black-dark);
  border-bottom: 3px solid var(--color-dark-turquoise);

  @media(max-width: 700px) {
    justify-content: center;
    padding: 12px 25px;

    & > ${ButtonWonder} {
      background-color: var(--color-dark-turquoise);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;

export default HeaderWonder;