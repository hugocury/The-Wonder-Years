import styled from 'styled-components';

export const Avatar = styled.img`  
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  border: 1rem solid var(--color-blue);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 300ms linear, opacity 100ms;
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`

  
  position: relative;
  border: var(--border) solid var(--color-blue);
  width: 420px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;
`;

export const Background = styled.div`
  --space: 10rem;
  --border: 2rem;  
  --move-space: calc(var(--space) * -1);

  position: relative;
  background-color: var(--color-blue);

  &::before,
  &::after {
      content: '';
      position: absolute;

      width: calc(var(--space) * 1.4);
      height: calc(var(--space) * 1.4);
      background-color: var(--color-blue);
      
      
      transition: transform 100ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform-origin: right top;
    transform: rotate(45deg) scale(0);
  }

  &:after {
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    z-index: -1;
    transform: rotate(-45deg) scale(0);
  }

    &:hover {
      &::before {
        transform: rotate(45deg) scale(1);
      }
      &::after {
        transform: rotate(-45deg) scale(1);
      }

    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));

      & > ${Avatar} {
          transform: translatex(0);
          opacity: 1;
          transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
       }
    }
  }
`