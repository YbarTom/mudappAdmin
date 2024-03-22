import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

const calculateBackgroundColor = (type) => {
  switch (type) {
    case "selected":
      return "white"; // Color para seleccionado
    case "correct":
      return "hsl(120, 50%, 90%)"; // Color para correcto
    case "incorrect":
      return "hsl(0, 50%, 90%)"; // Color para incorrecto
    default:
      return "transparent"; // Sin color de fondo
  }
};

const StyledButton = styled.button`
  background-color: ${props => calculateBackgroundColor(props.type)};
  border: 2px solid ${props => {
    switch (props.type) {
      case "selected":
        return "#6ab1e2";
      case "correct":
        return "lightgreen";
      case "incorrect":
        return "red";
      default:
        return "#8091A4";
    }
  }};
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonTrueFalse = ({ icono, type = "default", clickHandler }) => {
  const handleClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  };

  return <StyledButton type={type} onClick={handleClick}>{icono}</StyledButton>;
};

ButtonTrueFalse.propTypes = {
  icono: PropTypes.element,
  type: PropTypes.oneOf(["selected", "correct", "incorrect", "default"]),
  clickHandler: PropTypes.func, // Add propType for clickHandler
};
