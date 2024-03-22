import React, { useState } from "react";
import styled from "styled-components";
import { ButtonTrueFalse } from "./ButtonTrueFalse";
import { ThumbsUp4 } from "../icons/ThumbsUp4";
import { ThumbsDown4 } from "../icons/ThumbsDown4";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
  const [question, setQuestion] = useState("Pregunta");
  const [types, setTypes] = useState([
    {
      type1: "default",
      type2: "default",
    }
  ]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleClick = (index, valor) => {
    console.log(types)
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

    console.log(types)
  }

  const handleClickPlus = () => {
    setTypes(prevTypes => [...prevTypes, {
      type1: "default",
      type2: "default",
    }])
    console.log("AAA")
  }

  return (
    <QuestionContainer>
      {types.map((type, index) => (
        <QuestionContainer>
          <TextField value={question} onChange={handleQuestionChange} />
          <ButtonsContainer key={index}>
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
        </QuestionContainer>
      ))}
      <ButtonFlashCardPlus clickHandler={() => handleClickPlus()} />
    </QuestionContainer>
  );
}

TrueFalseComponent.propTypes = {};
