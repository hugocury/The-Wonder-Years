import styled, {css} from 'styled-components';

const TagWonder = styled.h2`
  display: inline-block;
  font-size: 21rem;
  background-color: var(--color-blue);
  padding: 8rem 16rem;
  color: var(--color-gray-light);

  ${({ small }) => small && css `
    font-size: 14rem;
    padding: 5rem 12rem;
  `};
`;

export default TagWonder;