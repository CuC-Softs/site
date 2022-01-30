import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { FragmentContainer, vibrate } from './common';

const FragmentOne = () => (
  <SvgOne>
    <svg viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
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

type FragmentGroupBottomRightProps = HTMLProps<HTMLDivElement>;

const FragmentGroupBottomRight: React.FC<FragmentGroupBottomRightProps> = ({
  style,
  className,
}) => (
  <FragmentContainer style={style} className={className}>
    <FragmentOne />
    <FragmentTwo />
    <FragmentThree />
  </FragmentContainer>
);

const SvgOne = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 20%;
  height: 20%;
  animation: ${vibrate(6)} linear infinite 3s both;
`;

const SvgTwo = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  width: 20%;
  height: 20%;
  animation: ${vibrate(6)} linear infinite 2s both;
`;
const SvgThree = styled.div`
  position: absolute;
  top: 35%;
  left: 15%;
  width: 20%;
  height: 20%;
  animation: ${vibrate(6)} linear infinite 2.5s both;
`;
export default FragmentGroupBottomRight;
