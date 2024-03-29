import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  width: 30px;
  height: 30px;
  margin-right: 20px; /* Espacio a la derecha de la imagen */
`;

const FlashCardBox = ({ type,title}) => {
  return (
    <StyledCourseSection>

      {type === "relate" && <Image src={Relate} alt="Relate Icon" />}
      {type === "trueFalse" && <Image src={TrueFalse} alt="True False Icon" />}
      {type === "complete" && <Image src={Complete} alt="Complete Icon" />}
      {type === "multipleChoice" && <Image src={multipleChoice} alt="Multiple Choice Icon" />}

      <LessonIntroduction title={title} status="locked" />
    </StyledCourseSection>
  );
};

FlashCardBox.propTypes = {
  type: PropTypes.string
}
export default FlashCardBox;
