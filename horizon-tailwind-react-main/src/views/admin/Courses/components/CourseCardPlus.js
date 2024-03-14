import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import add from "assets/img/ColleBree/add.png"; // Importa el icono de la basura
import BannerFoto from "assets/img/ColleBree/frame-85.png"; // Importa la imagen de fondo

const CourseCardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: #1b254014;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 335px;
  height: 211px;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
`;

const Frame = styled.div`
  align-self: center;
  background-image: url(${(props) => props.foto});
  background-position: center;
  background-size: contain;
  height: 80px; /* Tamaño pequeño */
  width: 80px; /* Tamaño pequeño */
`;

const CourseCardPlus = ({ text, onClick, foto = add }) => {
  const [isViewVisible, setViewVisible] = useState(true);

  const toggleView = () => {
    setViewVisible(!isViewVisible);
  };

  return (
    <CourseCardWrapper onClick={onClick} className="!bg-white dark:!bg-navy-700">
      <Frame foto={foto} />
    </CourseCardWrapper>
  );
};

CourseCardPlus.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CourseCardPlus;
