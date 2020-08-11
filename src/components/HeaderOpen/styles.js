import styled from 'styled-components';
import ButtonWonder from '../ButtonWonder';
import container from '../../tools/container';

export const HeaderWonder = styled.header`
  background-color: var(--color-black);
  border-bottom: 3px solid var(--color-blue);
  padding: 12px 25px; 

  @media(max-width: 700px) {    
    padding: 12px 25px;    
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${container};

  @media(max-width: 800px) {
    justify-content: center;

    & > ${ButtonWonder} {
    background-color: var(--color-blue);
    border: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    }
  }
`