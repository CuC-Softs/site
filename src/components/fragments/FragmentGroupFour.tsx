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
      <g filter="url(#filter0_d_448_233)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_448_233"
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
            result="effect1_dropShadow_448_233"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_448_233"
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
      <g filter="url(#filter0_d_448_232)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_448_232"
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
            result="effect1_dropShadow_448_232"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_448_232"
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
      width="31"
      height="42"
      viewBox="0 0 31 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_443_203)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_443_203"
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
            result="effect1_dropShadow_443_203"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_443_203"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </SvgThree>
);

type FragmentGroupFourProps = HTMLProps<HTMLDivElement>;

const FragmentGroupFour: React.FC<FragmentGroupFourProps> = ({
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
  right: 35%;
  z-index: 2;
  @media (min-width: 360px) {
    top: 40%;
    right: 32.5%;
  }
  @media (min-width: 375px) {
    top: 50%;
    right: 30%;
  }
  @media (min-width: 390px) {
    top: 38%;
  }
  @media (min-width: 414px) {
    top: 38%;
    right: 30%;
  }
  @media (min-width: 576px) {
    top: 75%;
    right: 22.5%;
  }
  @media (min-width: 768px) {
    top: 80%;
    right: 20%;
  }
  @media (min-width: 1024px) {
    right: 18%;
  }
`;

const SvgOne = styled.div`
  position: absolute;
  top: -50px;
  left: 70px;
  animation: ${vibrate(2)} linear infinite 3s both;
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

const SvgTwo = styled.div`
  position: absolute;
  top: -50px;
  left: 90px;
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
    left: 100px;
    svg {
      width: 25px;
    }
  }
  @media (min-width: 1024px) {
    left: 110px;
    svg {
      width: 30px;
    }
  }
`;
const SvgThree = styled.div`
  position: absolute;
  top: -25px;
  left: 80px;
  animation: ${vibrate(2)} linear infinite 2.5s both;
  svg {
    width: 15px;
  }
  @media (min-width: 360px) {
    svg {
      width: 20px;
    }
  }
  @media (min-width: 768px) {
    top: -20px;
    svg {
      width: 25px;
    }
  }
  @media (min-width: 1024px) {
    top: -15px;
    svg {
      width: 30px;
    }
  }
`;
export default FragmentGroupFour;
