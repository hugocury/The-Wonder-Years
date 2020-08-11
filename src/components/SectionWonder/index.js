import styled from 'styled-components';
import TagWonder from '../TagWonder';
import DescriptionWonder from '../DescriptionWonder';

const SectionWonder = styled.section`
  padding: 8rem 30rem;
  padding-bottom: 50rem;

  & > ${TagWonder} {
    margin-bottom: 20rem;
  }

  & > ${TagWonder}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }

  & > ${DescriptionWonder} {
    display: inline-block;
    margin-left: 15rem;
  }

  }
`;

export default SectionWonder;