import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import trash from "assets/img/ColleBree/trash.png"; // Importa el icono de la basura
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
  align-self: flex-end;
  margin-top: auto;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const CourseCard = ({ text, onClick, foto = BannerFoto }) => {
  return (
    <CourseCardWrapper onClick={onClick}>
      <Frame foto={foto} />
      <FrameWrapper>
        <InnerDiv>
          <Text>{text}</Text>
          <IconWrapper>
            <Icon src={trash} alt="Icono de Basura" />
            
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
