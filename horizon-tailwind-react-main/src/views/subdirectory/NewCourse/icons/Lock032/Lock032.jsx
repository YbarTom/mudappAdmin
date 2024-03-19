/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Lock032 = ({ color = "black", className }) => {
  return (
    <svg
      className={`lock-03-2 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17 11.7139V8.71387C17 5.95244 14.7614 3.71387 12 3.71387C9.23858 3.71387 7 5.95244 7 8.71387V11.7139M8.8 21.7139H15.2C16.8802 21.7139 17.7202 21.7139 18.362 21.3869C18.9265 21.0993 19.3854 20.6403 19.673 20.0758C20 19.4341 20 18.594 20 16.9139V16.5139C20 14.8337 20 13.9936 19.673 13.3519C19.3854 12.7874 18.9265 12.3285 18.362 12.0408C17.7202 11.7139 16.8802 11.7139 15.2 11.7139H8.8C7.11984 11.7139 6.27976 11.7139 5.63803 12.0408C5.07354 12.3285 4.6146 12.7874 4.32698 13.3519C4 13.9936 4 14.8337 4 16.5139V16.9139C4 18.594 4 19.4341 4.32698 20.0758C4.6146 20.6403 5.07354 21.0993 5.63803 21.3869C6.27976 21.7139 7.11984 21.7139 8.8 21.7139Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Lock032.propTypes = {
  color: PropTypes.string,
};
