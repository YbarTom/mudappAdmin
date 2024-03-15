import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  align-items: flex-start;
  background-color: rgba(226, 234, 242, 1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 12px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1; /* Agregar z-index para asegurar que la barra de progreso esté sobre la imagen de fondo */
`;

const FrameBar = styled.div`
  background-color: rgba(106, 177, 226, 1);
  border-radius: 16px;
  flex: 1;
  flex-grow: 1;
  position: relative;
  width: ${({ progress }) => progress}%;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer >
      <FrameBar  progress={progress}/>
    </ProgressBarContainer>
    
  );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired, // Esperamos un número como valor de progreso
};

export { ProgressBar };