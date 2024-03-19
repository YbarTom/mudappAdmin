import React from "react";
import styled from "styled-components";
import plus from 'assets/img/ColleBree/add.png';
import multipleChoice from 'assets/img/ColleBree/multipleChoice.png';
import LessonIntroduction from "./LessonIntroduction";
import Relate from "assets/img/ColleBree/relations.png";
import TrueFalse from "assets/img/ColleBree/trueFalse.png";
import Complete from "assets/img/ColleBree/text-box.png";

const StyledCourseSection = styled.div`
  align-items: center;
  border-radius: 16px;
  display: flex;
  position: relative;
  width: calc(100% - 48px); /* Resta el ancho de la imagen */
  margin-bottom: 15px;
  margin-left: 70px; /* Espacio a la izquierda de la imagen */
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 20px; /* Espacio a la derecha de la imagen */
`;

const FlashCardBox = ({}) => {
    return (
        <StyledCourseSection>
            <Image src={multipleChoice} alt="Multiple Choice Icon" />
            <LessonIntroduction title="Multiple Choice" status="locked" />
        </StyledCourseSection>
    );
};

export default FlashCardBox;
