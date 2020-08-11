import styled from 'styled-components';
import ButtonWonder from '../ButtonWonder';

export const HeaderWonder = styled.header`
  background-color: var(--color-black);
  border-bottom: 3px solid var(--color-blue);
  padding: 12rem 30rem; 

  @media(max-width: 700px) {    
    padding: 12rem 25rem;    
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  

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