import PropTypes from "prop-types";
import React, { useState } from "react";
import Lesson from "./Lesson";
import CourseSection from "./CourseSection";
import LessonPlus from "./LessonPlus";
const Level = ({ title, parte, status, className, id , onClickArrow}) => {
    const [showLessons, setShowLessons] = useState(false);

    const handleClickArrow = () => {
        setShowLessons(!showLessons);
    };


  return (
    <div>
     <CourseSection title="Curso 1" parte="PARTE 1" status="available" onClickArrow={()=>handleClickArrow()}/>
     {showLessons && (
            <div>
                <Lesson title="Lección 1" status="locked" />
                <LessonPlus/>
                {/* Aquí puedes agregar más Lesson si es necesario */}
            </div>
        )}
    </div>
  );
};



export default Level;