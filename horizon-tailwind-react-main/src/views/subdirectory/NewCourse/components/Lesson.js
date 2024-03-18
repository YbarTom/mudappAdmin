import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import LessonIcon from "./LessonIcon";
import LessonIntroduction from "./LessonIntroduction";

const LessonContainer = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 24px;
  position: relative;
  width: 100%;
`;

const Lesson = ({ locked = true, title, status, progress, ruta, idLesson}) => {
  return (
    <LessonContainer >
      <LessonIcon status={status} progress={progress} ruta={ruta} idLesson={idLesson}/>
      <LessonIntroduction title={title} status={status} />
    </LessonContainer>
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