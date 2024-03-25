import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import plus from 'assets/img/ColleBree/add.png';


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

const FlashCardBoxPlus = ({clickHandlerFlashCard}) => {
  const handleClick = () => {
    clickHandlerFlashCard();
  };
  return (
    <StyledCourseSection onClick={handleClick}>
        <Image src={plus} alt="Plus Icon" />
    </StyledCourseSection>
  );
};


export default FlashCardBoxPlus;
