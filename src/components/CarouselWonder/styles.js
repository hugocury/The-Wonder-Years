import styled, {css} from 'styled-components';
import { Background, WrapperThumb } from '../Thumbwonder/styles';
import arrowRight from '../../assets/img/arrowRight.svg';
import arrowLeft from '../../assets/img/arrowLeft.svg';

export const Wrapper = styled.div`
  --space-right: 20rem;
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: var(--space-right);    
  }

  ${({ move }) =>
    css`
      transform: translateX(
        calc(
          (var(--thumb-width) + var(--space-right)) * ${move}
        )
      );
    `}
`;

export const Right = styled.button`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-blue);
  right: 0;
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor: pointer;

  &::after {
    content: url(${arrowRight});
    display: inline-block;   
    opacity: 0.9;
    transition: transform 100ms linear;
  }

  &:hover::after {
    transform: scale(1.1);
  }

  &:active::after {
    transform: scale(1.1) translateX(4rem);
  }
`;

export const Left = styled.button`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-blue);
  left: 0;
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor: pointer;

  &::after {
    content: url(${arrowLeft});
    display: inline-block;   
    opacity: 0.9;
    transition: transform 100ms linear;
  }

  &:hover::after {
    transform: scale(1.1);
  }

  &:active::after {
    transform: scale(1.1) translateX(-4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --space-right-left: 20rem;
  --thumb-width: 300px;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) var(--space-right-left);
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
    box-sizing: border-box;
  }

  &:hover > ${Right} {
    opacity: 0.4;
  }

  &:hover > ${Left} {
    ${({ leftShow }) =>
      leftShow
        ? css`
            display: block;
            opacity: 0.4;            
          `
        : css`
            display: none;
            opacity: 0; 
          `}
  }

  & > ${Right}:hover {
    opacity: 0.7;
    transform-origin: right center;
  }
`;