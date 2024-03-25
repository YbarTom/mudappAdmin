import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

const InputWrapper = styled.div`
  align-items: center;
  background-color: #e5e7e8;
  border-radius: 16px;
  display: flex;
  height: 58px;
  justify-content: space-between;
  overflow: hidden;
  padding: 0px 24px;
  position: relative;
  width: 100%;
`;

const FilledInput = styled.input`
  background-color: #e5e7e8;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
`;

const Text = styled.span`
  font-family: "Manrope", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 21px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: space-around;
  position: relative;
  width: 24px;
`;



export const Input = ({ showIcon, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      {/* Utilizamos la prop 'value' y 'onChange' en el FilledInput */}
      <FilledInput placeholder={placeholder} value={value} onChange={onChange} />
    </InputWrapper>
  );
};

Input.propTypes = {
  showIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(["filled", "empty"]),
  // Añadimos las propiedades 'value' y 'onChange'
  value: PropTypes.string,
  onChange: PropTypes.func,
};