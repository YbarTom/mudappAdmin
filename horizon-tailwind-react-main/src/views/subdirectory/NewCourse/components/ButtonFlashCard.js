import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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

const Text = styled.p`
  white-space: nowrap;
  margin: 0;
  padding: 6px;
  font-family: "Manrope", Helvetica;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  font-weight: bold;
 
`;

const ButtonFlashCard = ({ text, clickHandler, type = "default" }) => {
  return <StyledButton type={type} onClick={clickHandler}><Text type={type}>{text}</Text></StyledButton>;
};


export default ButtonFlashCard;