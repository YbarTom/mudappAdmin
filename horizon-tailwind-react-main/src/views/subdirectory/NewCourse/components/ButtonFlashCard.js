// ButtonFlashCard.js
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

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
  font-weight: bold;
`;

const Text = styled.span`
  font-weight: bold;
`;

const ButtonFlashCard = ({ initialText = "add Text", clickHandler, type = "default", index }) => {
  const [text, setText] = useState(initialText);
  const [editing, setEditing] = useState(false);

  const handleButtonClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
    clickHandler(index, event.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
    clickHandler(index, text);
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
  initialText: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
  index: PropTypes.number.isRequired
};

export default ButtonFlashCard;
