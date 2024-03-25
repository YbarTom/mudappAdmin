import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import plus from "assets/img/ColleBree/add.png";

const StyledButton = styled.button`
  background-color: hsl(210, 20%, 98%);
  border: 2px solid #8091A4;
  border-radius: 16px;
  padding: 16px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background-color: hsl(210, 20%, 98%);
  border: none;
  outline: none;
  font-family: "Manrope", Helvetica;
  font-size: 16px;
  font-weight: bold; /* Mantén el negrita para el campo de entrada */
`;

const Text = styled.span`
  font-weight: bold; /* Mantén el negrita para el texto */
`;

const ButtonFlashCard = ({ initialText = "add Text", clickHandler, type = "default" }) => {
  const [text, setText] = useState(initialText);
  const [editing, setEditing] = useState(false);

  const handleButtonClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <StyledButton type={type} onClick={handleButtonClick}>
      {editing ? (
        <Input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <Text>{text}</Text>
      )}
    </StyledButton>
  );
};

ButtonFlashCard.propTypes = {
  initialText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default ButtonFlashCard;
