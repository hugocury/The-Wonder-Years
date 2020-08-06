import styled from 'styled-components';
import container from '../../tools/container';
import TagWonder from '../TagWonder';
import TitleWonder from '../TilteWonder';

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;

  ${TagWonder} {
    margin-bottom: 20rem;
  }

  ${TitleWonder} {
    margin-bottom: 10rem;
  }
`;

export const BannerWonder = styled.section`  
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center ;
  max-height: 70vh;
  height: 100vh;

`;