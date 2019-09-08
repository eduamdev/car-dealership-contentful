import { keyframes } from 'styled-components';

const showUpFromRight = props => keyframes`
0%{
    opacity: 0;
    transform:translateX(50%)
}
100% {
    opacity: 1;
    transform:none;
}
`;

const fadeOut = props => keyframes`
0%{
    opacity: 1;
    visibility: visible;
}
100% {
    opacity: 0;
    visibility: hidden;
}
`;

const ripple = props => keyframes`
0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(40, 40);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(80, 80);
  }
`;

export { showUpFromRight, fadeOut, ripple };
