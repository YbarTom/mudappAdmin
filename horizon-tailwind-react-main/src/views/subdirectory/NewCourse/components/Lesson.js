import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import LessonIcon from "./LessonIcon";
import LessonIntroduction from "./LessonIntroduction";
import arrowUp from "assets/img/ColleBree/ArrowUpGrey.png";
import arrowDown from "assets/img/ColleBree/ArrowDownGrey.png";
import FlashCardBox from "./FlashCardBox";

const LessonContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  position: relative;
  width: 100%;
`;

const ArrowImage = styled.img`
  margin-left: auto; /* Alinea la flecha a la derecha */
  margin-right: 20px; /* Alinea la flecha a la derecha */
`;

const Lesson = ({ locked = true, title, status, progress, ruta, idLesson}) => {
  const [arrowVisible, setArrowVisible] = useState(true); // Estado para controlar qué flecha se muestra
  const toggleArrow = () => {
    setArrowVisible(!arrowVisible);
  };

  return (
    <div>
    <LessonContainer>
      <LessonIcon status={status} progress={progress} ruta={ruta} idLesson={idLesson}/>
      <LessonIntroduction title={title} status={status} />
      {arrowVisible ? (
        <ArrowImage src={arrowDown} alt="Locked Icon" onClick={toggleArrow} />
      ) : (
        <ArrowImage src={arrowUp} alt="Locked Icon" onClick={toggleArrow} />
      )}
    </LessonContainer>
    {!arrowVisible && <div><FlashCardBox/>
                <FlashCardBox/>

                <FlashCardBox/>

                <FlashCardBox/></div>}
    </div>
  );
};

Lesson.propTypes = {
  locked: PropTypes.bool,
  title: PropTypes.string,
  progress: PropTypes.number,
  status: PropTypes.oneOf(["available", "locked", "completed"]),
  ruta: PropTypes.string,
  idLesson: PropTypes.number
};

export default Lesson;
