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
  --space: 10rem;
  position: relative;
  border: 2rem solid var(--color-red);
  width: 420px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    --move: calc(var(--space) * -1);
    transform: translate(var(--move), var(--move));   /* posso usar esse --move: calc; ou scale();  */
    /* transform: scale(1.05); */

    & > ${Avatar} {
        transform: translatex(0);
        opacity: 1;
        transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
    }
  }
`;