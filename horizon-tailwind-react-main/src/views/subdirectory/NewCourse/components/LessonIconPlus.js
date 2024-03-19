import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import plus from "assets/img/ColleBree/add.png";
// Estilizar el contenedor del icono para aplicar un tamaño fijo y centrar el contenido
const IconContainer = styled.div`
  width: 48px; /* Cambia este valor según tus necesidades */
  height: 48px; /* Cambia este valor según tus necesidades */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Cambia el cursor para indicar que es clickeable */
`;

const LessonIcon = () => {

  // Función que maneja el clic en el icono
  



    const iconComponent = <img src={plus} alt="plus Icon" />;
  

  return (
    <IconContainer >
      {iconComponent}
    </IconContainer>
  );
};



export default LessonIcon;