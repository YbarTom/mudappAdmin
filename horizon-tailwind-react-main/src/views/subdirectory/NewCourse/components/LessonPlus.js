import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import LessonIconPlus from "./LessonIconPlus";


const LessonContainer = styled.div`
margin-top: 10px;
  align-items: center;
  display: inline-flex;
  gap: 24px;
  position: relative;
  width: 100%;
`;


const LessonPlus = ({ locked = true, title, status, progress, ruta, idLesson, id, clickHandler }) => {

  const handleClick = () => {
    clickHandler(id);
  };

  return (
    <LessonContainer onClick={handleClick}>
      <LessonIconPlus status={status} progress={progress} ruta={ruta} idLesson={idLesson} />

    </LessonContainer>
  );
};



export default LessonPlus;