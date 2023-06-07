import styled from '@emotion/styled';

export const Spiner = styled.svg`
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 70px;
  height: 70px;
`;
export const Circle = styled.circle`
  stroke: hsl(204, 100%, 50%);
  stroke-linecap: round;
  stroke-width: 5px;
  animation: dash 1.5s ease-in-out infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
