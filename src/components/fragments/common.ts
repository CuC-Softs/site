import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {transform: translateY(0);}
  50% {transform: translateY(-5px);}
`;

export const vibrate = (position: number) => keyframes`
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-${position}px, ${position}px);
            transform: translate(-${position}px, ${position}px);
  }
  40% {
    -webkit-transform: translate(-${position}px, -${position}px);
            transform: translate(-${position}px, -${position}px);
  }
  60% {
    -webkit-transform: translate(${position}px, ${position}px);
            transform: translate(${position}px, ${position}px);
  }
  80% {
    -webkit-transform: translate(${position}px, -${position}px);
            transform: translate(${position}px, -${position}px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`;
