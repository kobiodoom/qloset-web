
import React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="102" height="32" viewBox="0 0 102 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1_2)">
      <path d="M10.6667 0H21.3333V32H10.6667V0Z" fill="#FFF176"/>
      <path d="M0 0H10.6667V16H0V0Z" fill="#80CBC4"/>
      <path d="M0 16H10.6667V32H0V16Z" fill="#F48FB1"/>
      <path d="M10.6667 16H21.3333V32H10.6667V16Z" fill="#FFAB91"/>
      <path d="M32 0H102V32H32V0Z" fill="#757575"/>
    </g>
    <defs>
      <clipPath id="clip0_1_2">
        <rect width="102" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);
