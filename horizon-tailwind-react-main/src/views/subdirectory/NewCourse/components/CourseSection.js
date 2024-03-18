import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Lock032 } from "../icons/Lock032/Lock032";
import openBook from "assets/img/ColleBree/libro-abierto.png";
import arrowDown from "assets/img/ColleBree/ArrowDown.png";
import arrowUp from "assets/img/ColleBree/ArrowDown2.png";
import Lesson from "./Lesson";
const StyledCourseSection = styled.div`
  align-items: flex-start;
  border-radius: 16px;
  background-color: ${({ locked }) => (locked ? "rgba(128, 145, 164, 1)" : "rgba(106, 177, 226, 1)")};
  display: flex;
  flex-direction: column;
  padding: 20px  20px 15px;
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const Parte = styled.div`
  color: rgba(255, 255, 255, 1);
  font-family: "Manrope", Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.54px;
  line-height: 16.8px;
  margin-top: -1px;
  opacity: 0.8;
  position: relative;
  white-space: nowrap;
`;

const LockIcon = styled(Lock032)`
  height: 24px !important;
  width: 24px !important;
`;

const TeoriaImage = styled.img`
  width: 30px;
  height: 30px;
`;

const Parte2 = styled.div`
  color: rgba(255, 255, 255, 1);
  font-family: "Manrope", Helvetica;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.54px;
  line-height: 16.8px;
  position: relative;
  white-space: nowrap;
`;

const Title = styled.p`
  color: rgba(255, 255, 255, 1);
  font-family: "Manrope", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.63px;
  line-height: 21.6px;
  text-align: left;
`;




const CourseSection = ({ title, parte, status, className, id , onClickArrow}) => {
  const [arrowVisible, setArrowVisible] = useState(true); // Estado para controlar qué flecha se muestra
  const [showLessons, setShowLessons] = useState(false);

 

  // Función para alternar entre las flechas
  const toggleArrow = () => {
    setArrowVisible(!arrowVisible);
    setShowLessons(!showLessons); // Alternar la visibilidad de los Lesson
    onClickArrow(); // Llama a la función onClickArrow proporcionada por el componente padre
};


  return (
    <div>
    <StyledCourseSection locked={status === "locked"}>
      <Frame>
                <Group>
          {status === "available" && <Parte>{parte}</Parte>}
          {status === "locked" && (
            <>
              <LockIcon color="white" />
              <Parte2>{parte}</Parte2>
            </>
          )}
        </Group>
        <Group>
        <TeoriaImage src={openBook} alt="Libro" />
          {arrowVisible ? (
            <img src={arrowDown} alt="Locked Icon" onClick={toggleArrow} />
          ) : (
            <img src={arrowUp} alt="Locked Icon" onClick={toggleArrow} />
          )}
        </Group>
      </Frame>
      <Title>{title}</Title>
    </StyledCourseSection>
    {showLessons && (
            <div>
                <Lesson title="Lección 1" status="locked" />
                <Lesson title="Lección 2" status="locked" />
                {/* Aquí puedes agregar más Lesson si es necesario */}
            </div>
        )}
    </div>
  );
};

CourseSection.propTypes = {
  title: PropTypes.string,
  parte: PropTypes.string,
  status: PropTypes.oneOf(["locked", "default"]),
  onClickArrow: PropTypes.func, // Propiedad para manejar el clic en la flecha
};

export default CourseSection;