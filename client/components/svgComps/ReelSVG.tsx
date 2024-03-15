import React from 'react';

const ReelSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      id="reel"
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        stroke="#000"
        strokeLinejoin="round"
        rx="4"
      ></rect>
      <path
        stroke="#000"
        strokeLinejoin="round"
        d="M9 11.809C9 11.3622 9.36221 11 9.80902 11V11C9.93461 11 10.0585 11.0292 10.1708 11.0854L14.5528 13.2764C14.8269 13.4134 15 13.6936 15 14V14C15 14.3064 14.8269 14.5866 14.5528 14.7236L10.1708 16.9146C10.0585 16.9708 9.93461 17 9.80902 17V17C9.36221 17 9 16.6378 9 16.191V11.809Z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8H22M8 8L10 2M14 8L16 2"
      ></path>
    </svg>
  );
};

export default ReelSVG;
