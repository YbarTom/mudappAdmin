import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import trash from "assets/img/ColleBree/trash.png"; // Importa el icono de la basura
import BannerFoto from "assets/img/ColleBree/frame-85.png"; // Importa la imagen de fondo
import pen from "assets/img/ColleBree/pen.png"; // Importa el icono del lápiz
import view from "assets/img/ColleBree/view.png"; // Importa el icono de la vista
import hide from "assets/img/ColleBree/hide.png"; // Importa el icono de ocultar

const CourseCardWrapper = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: #1b254014;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 335px;
`;

const Frame = styled.div`
  align-self: stretch;
  background-image: url(${(props) => props.foto});
  background-position: 50% 50%;
  background-size: cover;
  height: 120px;
  position: relative;
  width: 100%;
`;

const FrameWrapper = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 15px;
  position: relative;
  width: 100%;
`;

const InnerDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.div`
  font-family: "Manrope", Helvetica;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.63px;
  line-height: 21.6px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-top: auto;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px; /* Ajusta el margen entre los iconos si es necesario */
  cursor: pointer;
`;

const CourseCard = ({ text, onClick, foto = BannerFoto ,id}) => {
  const [isViewVisible, setViewVisible] = useState(true);
  const toggleView = () => {
    setViewVisible(!isViewVisible);
  };

  const handleDeleteCourse = async () => {
    try {
      const response = await fetch(`http://localhost:3001/courses/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al eliminar el curso");
      }
      console.log(response);
    } catch (error) {
      console.error("Error al eliminar el curso:", error);
    }
  }
  return (
    <CourseCardWrapper onClick={onClick} className=" !bg-white dark:!bg-navy-700" >
      <Frame foto={foto} />
      <FrameWrapper>
        <InnerDiv>
          <Text className="text-navy-700 dark:text-white">{text}</Text>
          <IconWrapper>
            <Icon
              src={isViewVisible ? view : hide}
              alt={isViewVisible ? "Icono de Vista" : "Icono de Ocultar"}
              onClick={toggleView}
            />
            <Icon src={pen} alt="Icono de Lápiz" />
            <Icon src={trash} alt="Icono de Basura" onClick={handleDeleteCourse}/>
          </IconWrapper>
        </InnerDiv>
      </FrameWrapper>
    </CourseCardWrapper>
  );
};

CourseCard.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default CourseCard;
