import React from "react";
import styled from "styled-components";
import plus from 'assets/img/ColleBree/add.png'

const StyledCourseSection = styled.div`
  align-items: center; /* Cambiado a centrar verticalmente */
  border-radius: 16px;
  background-color: white;
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  padding: 20px  20px 15px;
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CourseSectionPlus = ({clickhandler}) => {
    return (
        <StyledCourseSection onClick={clickhandler}>
            <StyledImage src={plus} />
        </StyledCourseSection>
    );
};

export default CourseSectionPlus;
