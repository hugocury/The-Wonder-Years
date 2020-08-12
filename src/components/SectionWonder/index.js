import styled from 'styled-components';
import TagWonder from '../TagWonder';
import DescriptionWonder from '../DescriptionWonder';

const SectionWonder = styled.section`
  padding: 12rem 25rem;
  padding-bottom: 50rem;

  & > ${TagWonder} {
    margin-bottom: 20rem;
  }

  & > ${DescriptionWonder} {
    display: inline-block;
    margin-left: 15rem;
  }

  }
`;

export default SectionWonder;