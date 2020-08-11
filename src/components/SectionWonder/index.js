import styled from 'styled-components';
import container from '../../tools/container';
import TagWonder from '../TagWonder';
import DescriptionWonder from '../DescriptionWonder';

const SectionWonder = styled.section`
  padding-top: 20rem;
  padding-bottom: 20rem;
  ${container};

  & > ${TagWonder} {
    margin-bottom: 40rem;
  }

  & > ${DescriptionWonder} {
    display: inline-block;
    margin-left: 15rem;
  }

  }
`;

export default SectionWonder;