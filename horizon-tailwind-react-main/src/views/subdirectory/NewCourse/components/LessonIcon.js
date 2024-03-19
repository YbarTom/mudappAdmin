import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LessonStatusIcon1 } from "../icons/LessonStatusIcon1/LessonStatusIcon1";
import locked from "assets/img/ColleBree/Locked.png";
import Completed from "assets/img/ColleBree/LessonCompleted.png";
// Estilizar el contenedor del icono para aplicar un tamaño fijo y centrar el contenido
const IconContainer = styled.div`
  width: 48px; /* Cambia este valor según tus necesidades */
  height: 48px; /* Cambia este valor según tus necesidades */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Cambia el cursor para indicar que es clickeable */
`;

const LessonIcon = ({ status, progress, ruta, idLesson }) => {

  // Función que maneja el clic en el icono
  

  let iconComponent = null;

  if (status === "available") {
    iconComponent = <LessonStatusIcon1 percentatge={progress} />;
  } else if (status === "locked") {
    iconComponent = <img src={locked} alt="Locked Icon" />;
  } else if (status === "completed") {
    iconComponent = <img src={Completed} alt="Completed Icon" />;
  }
  return (
    <IconContainer >
      {iconComponent}
    </IconContainer>
  );
};

LessonIcon.propTypes = {
  status: PropTypes.oneOf(["available", "locked", "completed"]),
  progress: PropTypes.number,
  ruta: PropTypes.string, // Debería ser una cadena, ya que es la ruta que se pasará a router.push
  idLesson: PropTypes.number
};

export default LessonIcon;