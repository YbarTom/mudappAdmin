import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components"; // Import styled-components
import {ProgressBarText}from "./ProgressBarText"; // Import ProgressBarText component
import BannerFoto from "assets/img/ColleBree/frame-85.png";
// Define styled components
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
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
    position: relative;
    width: 100%;
`;

const InnerDiv = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
    width: 100%;
`;

const Text = styled.div`
    font-family: "Manrope", Helvetica;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.63px;
    line-height: 21.6px;
    margin-top: -1px;
    position: relative;
    width: 302px;
    left: 0;
`;



const CourseCard = ({ text, progress, onClick, foto=BannerFoto}) => {
    return (
        <CourseCardWrapper onClick={onClick}>
            <Frame foto={foto} />
            <FrameWrapper>
                <InnerDiv>
                    <Text>{text}</Text>
                    {/* Assuming ProgressBarText is a styled component */}
                    <ProgressBarText progress={progress} />
                </InnerDiv>
            </FrameWrapper>
        </CourseCardWrapper>
    );
};

// Define prop types
CourseCard.propTypes = {
    text: PropTypes.string,
    progress: PropTypes.number,
    onClick: PropTypes.func,
};

export default CourseCard;