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
  bottom: 180px;
  left: 2.5px;
`;

const SvgOne = styled.div`
  position: absolute;
  top: -50px;
  left: 55px;
  animation: ${vibrate(2)} linear infinite 3s both;
`;

const SvgTwo = styled.div`
  position: absolute;
  top: -48px;
  left: 80px;
  animation: ${vibrate(2)} linear infinite 2s both;
`;
const SvgThree = styled.div`
  position: absolute;
  top: -20px;
  left: 65px;
  animation: ${vibrate(2)} linear infinite 2.5s both;
`;

export default FragmentGroupTwo;
