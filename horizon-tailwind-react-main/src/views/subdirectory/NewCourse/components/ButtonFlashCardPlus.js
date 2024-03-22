import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import plus from "assets/img/ColleBree/add.png";

const StyledButton = styled.button`
  background-color: hsl(210, 20%, 98%);
  border: 2px solid #8091A4;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusIcon = styled.img`
  max-width: 20px; /* Establece el ancho máximo */
  max-height: 20px; /* Establece la altura máxima */
`;

export const ButtonFlashCardPlus = ({ clickHandler }) => {

  const handleClick = () => {
    if (clickHandler) {
      clickHandler();
    }
  };

  return <StyledButton onClick={handleClick}><PlusIcon src={plus} alt="Plus Icon" /></StyledButton>;
};

export default ButtonFlashCardPlus;
