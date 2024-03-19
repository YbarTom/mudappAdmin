import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const LessonStatusIcon1 = ({ className, percentatge}) => {
  const progress = percentatge;

  return (
    <svg
      className={`lesson-status-icon-1 ${className}`}
      fill="none"
      height="70"
      viewBox="0 0 64 64"
      width="60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g">
        <CircularProgressbar value={progress} text={`${progress}%`} />
        <circle
          fill="#6AB1E2"
          cx="32"
          cy="32"
          r="24"
        />
        <path
          fill="white"
          d="M22 19.99C22 19.0189 22 18.5333 22.2025 18.2656C22.3789 18.0324 22.6485 17.888 22.9404 17.8706C23.2754 17.8506 23.6795 18.1199 24.4875 18.6587L35.0031 25.669C35.6708 26.1142 36.0046 26.3367 36.1209 26.6172C36.2227 26.8625 36.2227 27.1381 36.1209 27.3833C36.0046 27.6638 35.6708 27.8864 35.0031 28.3315L24.4875 35.3419C23.6795 35.8806 23.2754 36.1499 22.9404 36.1299C22.6485 36.1124 22.3789 35.9681 22.2025 35.7349C22 35.4672 22 34.9816 22 34.0105V19.99Z"
          transform="translate(4.5, 5)"
        />
      </g>
    </svg>
  );
};
