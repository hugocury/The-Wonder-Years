import styled from 'styled-components';

export const Channel = styled.figcaption`
  font-size: 16rem;
  color: var(--color-gray-light);
  text-shadow: 2px 2px 2px var(--color-black);
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  border: 2rem solid var(--color-blue);
  margin-right: 10rem;
`;

export const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;  
`; 