import React from "react";
import styled from "styled-components";
import plus from 'assets/img/ColleBree/add.png'

const StyledCourseSection = styled.div`
  align-items: center; /* Cambiado a centrar verticalmente */
  border-radius: 16px;
  background-color: rgba(106, 177, 226, 1);
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  padding: 20px  20px 15px;
  position: relative;
  width: 100%-48px;
  margin-bottom: 15px;
  margin-left: 48px; /* Alinea a la derecha */
  margin-right: 20px; /* Alinea a la derecha */

`;


const FlashCardBox = ({}) => {
    return (
        <StyledCourseSection>
        </StyledCourseSection>
    );
};

export default FlashCardBox;
