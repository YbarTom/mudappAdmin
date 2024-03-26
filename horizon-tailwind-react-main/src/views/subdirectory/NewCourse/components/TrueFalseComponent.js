import React, { useState } from "react";
import styled from "styled-components";
import { ButtonTrueFalse } from "./ButtonTrueFalse";
import { ThumbsUp4 } from "../icons/ThumbsUp4";
import { ThumbsDown4 } from "../icons/ThumbsDown4";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";
import { ButtonLogOut } from "./randomButton";
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  height: calc(100vh - 285px);
      overflow-y: auto;

`;

const TextField = styled.input`
  font-family: "Manrope", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.56px;
  line-height: 19.2px;
  position: relative;
  white-space: normal;
  width: fit-content;
  border: none;
  outline: none;
  background-color: transparent;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
`;

export const TrueFalseComponent = () => {
  const [types, setTypes] = useState([
    {
      text: "Pregunta",
      type1: "default",
      type2: "default",
    }
  ]);

  const [title, setTitle] = useState(""); // Estado para el título

  const handleQuestionChange = (event, index) => {
    const { value } = event.target;
    setTypes(prevTypes => {
      const updatedTypes = [...prevTypes];
      updatedTypes[index].text = value;
      return updatedTypes;
    });
  };

  const handleClick = (index, valor) => {
    setTypes(prevTypes => {
      const updatedTypes = [...prevTypes];
      if (valor) {
        updatedTypes[index].type1 = "correct";
        updatedTypes[index].type2 = "default";
      } else {
        updatedTypes[index].type1 = "default";
        updatedTypes[index].type2 = "incorrect";
      }
      return updatedTypes;
    });
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value); // Actualiza el estado del título
  };

  const handleClickPlus = () => {
    setTypes(prevTypes => [
      ...prevTypes,
      {
        text: "Pregunta",
        type1: "default",
        type2: "default",
      }
    ]);
  };

  return (
    <QuestionContainer>
      {/* Campo de entrada de texto para el título */}
      <input
        type="text"
        placeholder="Ingresa el título"
        value={title}
        onChange={handleChangeTitle}
      />
      {types.map((type, index) => (
        <div key={index}>
          <input // Cambiado de TextField a input
            type="text"
            value={type.text}
            onChange={event => handleQuestionChange(event, index)}
          />
          <ButtonsContainer>
            <ButtonTrueFalse
              icono={<ThumbsUp4 />}
              type={type.type1}
              clickHandler={() => handleClick(index, true)}
            />
            <ButtonTrueFalse
              icono={<ThumbsDown4 />}
              type={type.type2}
              clickHandler={() => handleClick(index, false)}
            />
          </ButtonsContainer>
        </div>
      ))}
      <div style={{marginTop:"20px"}}>
            <ButtonLogOut text={"Save"} type={"blue"} />
            </div>

    </QuestionContainer>
  );
};
