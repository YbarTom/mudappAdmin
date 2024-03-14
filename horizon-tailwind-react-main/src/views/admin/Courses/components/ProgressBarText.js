import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CompletedText = styled.p`
  color: rgba(106, 177, 226, 1); /* Color de progreso completado */
  font-family: "Manrope", Helvetica;
`;

const PendingText = styled.p`
  color: rgba(226, 234, 242, 1); /* Color pendiente */
  font-family: "Manrope", Helvetica;
`;

const ProgressBarText = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBar progress={progress} />
      {progress !== undefined ? (
        <CompletedText>{progress}% Completado</CompletedText>
      ) : (
        <PendingText>Pendiente</PendingText>
      )}
    </ProgressBarContainer>
  );
};

ProgressBarText.propTypes = {
  progress: PropTypes.number, // No requerido ahora
};

export { ProgressBarText };