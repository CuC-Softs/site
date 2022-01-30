import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { vibrate } from './common';

const FragmentOne = () => (
  <SvgOne>
    <svg
      width="31"
      height="42"
      viewBox="0 0 31 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_443_202)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.4"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_443_202"
          x="0"
          y="0"
          width="31"
          height="42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_443_202"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_443_202"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </SvgOne>
);

const FragmentTwo = () => (
  <SvgTwo>
    <svg
      width="31"
      height="42"
      viewBox="0 0 31 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_443_206)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.4"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_443_206"
          x="0"
          y="0"
          width="31"
          height="42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_443_206"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_443_206"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </SvgTwo>
);

const FragmentThree = () => (
  <SvgThree>
    <svg
      width="20"
      height="31"
      viewBox="0 0 20 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_443_205)">
        <path
          d="M4 11.8252L4.11321 1.80582L16 0L13.9057 12L4 11.8252Z"
          fill="#CF721C"
          fillOpacity="0.4"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_443_205"
          x="0"
          y="0"
          width="20"
          height="31"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="15" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_443_205"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_443_205"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </SvgThree>
);

type FragmentGroupTwoProps = HTMLProps<HTMLDivElement>;

const FragmentGroupTwo: React.FC<FragmentGroupTwoProps> = ({
  style,
  className,
}) => (
  <Container style={style} className={className}>
    <FragmentOne />
    <FragmentTwo />
    <FragmentThree />
  </Container>
);

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: -15%;
  z-index: 2;
  @media (min-width: 360px) {
    top: 45%;
    left: -12.5%;
  }
  @media (min-width: 375px) {
    top: 50%;
  }
  @media (min-width: 390px) {
    top: 40%;
  }
  @media (min-width: 414px) {
    top: 35%;
    left: -10%;
  }
  @media (min-width: 576px) {
    top: 65%;
    left: -5%;
  }
  @media (min-width: 768px) {
    top: 80%;
    left: 0%;
  }
  @media (min-width: 1024px) {
    top: 90%;
  }
`;

const SvgOne = styled.div`
  position: absolute;
  top: -50px;
  left: 55px;
  animation: ${vibrate(2)} linear infinite 3s both;
  svg {
    width: 15px;
  }
  @media (min-width: 360px) {
    left: 50px;
    svg {
      width: 20px;
    }
  }
  @media (min-width: 768px) {
    left: 40px;
    svg {
      width: 25px;
    }
  }
  @media (min-width: 1024px) {
    svg {
      width: 30px;
    }
  }
`;

const SvgTwo = styled.div`
  position: absolute;
  top: -48px;
  left: 70px;
  animation: ${vibrate(2)} linear infinite 2s both;
  svg {
    width: 15px;
  }
  @media (min-width: 360px) {
    svg {
      width: 20px;
    }
  }
  @media (min-width: 768px) {
    svg {
      width: 25px;
    }
  }
  @media (min-width: 1024px) {
    svg {
      width: 30px;
    }
  }
`;
const SvgThree = styled.div`
  position: absolute;
  top: -25px;
  left: 65px;
  animation: ${vibrate(2)} linear infinite 2.5s both;
  svg {
    width: 10px;
  }
  @media (min-width: 360px) {
    top: -15px;
    left: 60px;
    svg {
      width: 20px;
    }
  }
  @media (min-width: 1024px) {
    svg {
      width: 25px;
    }
  }
`;

export default FragmentGroupTwo;
