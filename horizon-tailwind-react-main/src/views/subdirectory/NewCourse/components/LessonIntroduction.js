import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Introduccion = styled.div`
  font-family: "Manrope", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.56px;
  line-height: 19.2px;
  position: relative;
  white-space: normal;
  width: fit-content;
  color: ${(props) => {
    switch (props.status) {
      case "available":
        return "black";
      case "locked":
        return "rgba(128, 145, 164, 1)";
      default:
        return "black";
    }
  }};
`;

const LessonIntroduction = ({ title, status }) => {
  return <Introduccion status={status}>{title}</Introduccion>;
};

LessonIntroduction.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf(["available", "locked", "completed"]),
};

export default LessonIntroduction;