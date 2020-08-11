import styled from 'styled-components';
import { Background, WrapperThumb } from '../Thumbwonder/styles';
import arrow from '../../assets/img/arrowRight.svg';

export const Right = styled.button`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-blue);
  right: 0;
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    display: inline-block;   
    opacity: 0.9;
    transition: transform 100ms linear;
  }

  &:hover::after {
    transform: scale(1.2);
  }

  &:active::after {
    transform: scale(1.2) translateX(4rem);
  }
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 20rem;
  overflow: hidden;

  & > ${Background} {
    margin-right: 20rem;    
  }

  & ${WrapperThumb} {
    width: 300px;
  }

  &:hover > ${Right} {
    opacity: 0.2;
  }

  & > ${Right}:hover {
    opacity: 0.6;
    transform-origin: right center;
  }
`;