import styled from 'styled-components';

const ButtonWonder = styled.button`
  padding: 12px 24px;
  background-color: var(--color-black);
  color: var(--color-blue);
  border: 1px solid var(--color-blue);  
  font-size: 12rem;
  cursor: pointer;
  text-decoration: nome;
  transition: transform 100ms cubic-bezier(0, 0, 0.73, 2.24);

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transition: transform 100ms linear; 
    transform: scale(1);
  }
`;

export default ButtonWonder;