import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { FragmentContainer, vibrate } from './common';

const FragmentOne = () => (
  <SvgOne>
    <svg viewBox="0 0 31 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_443_204)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_443_204"
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
            result="effect1_dropShadow_443_204"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_443_204"
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
      <g filter="url(#filter0_d_448_231)">
        <path
          d="M4 22.665L4.21698 3.46116L27 0L22.9858 23L4 22.665Z"
          fill="#CF721C"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_448_231"
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
            result="effect1_dropShadow_448_231"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_448_231"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </SvgTwo>
);

type FragmentGroupTopRightProps = HTMLProps<HTMLDivElement>;

const FragmentGroupTopRight: React.FC<FragmentGroupTopRightProps> = ({
  style,
  className,
}) => (
  <FragmentContainer style={style} className={className}>
    <FragmentOne />
    <FragmentTwo />
  </FragmentContainer>
);

const SvgOne = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  width: 25%;
  height: 25%;
  animation: ${vibrate(6)} linear infinite 2s both;
`;

const SvgTwo = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 25%;
  height: 25%;
  animation: ${vibrate(6)} linear infinite 2s both;
`;

export default FragmentGroupTopRight;
