import PropTypes from "prop-types";
import React, { useState } from "react";
import Lesson from "./Lesson";
import CourseSection from "./CourseSection";
import LessonPlus from "./LessonPlus";
import FlashCardBox from "./FlashCardBox";
const Level = ({ title, parte, status, className, id, onClickArrow, lessons, clickHandler }) => {
  const [showLessons, setShowLessons] = useState(false);

  const handleClickArrow = () => {
    setShowLessons(!showLessons);
  };


  return (
    <div>
      <CourseSection title={title} parte={`Parte ${parte}`} status="available" onClickArrow={() => handleClickArrow()} />
      {showLessons && (
        <div>
          {lessons.map((lesson, index) => (
            <Lesson key={index} title={lesson.title} flashcards={lesson.flashcards} />
          ))}

          <LessonPlus id={id} clickHandler={clickHandler}/>
          {/* Aquí puedes agregar más Lesson si es necesario */}
        </div>
      )}
    </div>
  );
};



export default Level;