import { styled} from "styled-components";

const MyButton = styled.button`
all: unset;
background-color: white;
align-items: center;
border-radius: 16px;
box-sizing: border-box;
display: inline-flex;
gap: 10px;
height: 58px;
justify-content: center;
padding: 23px 60px;
position: relative;
width: 100%;
margin: 0 auto;
`;


const TextWrapper = styled.div`
font-family: "Manrope-Bold", Helvetica;
color: red;
font-size: 14px;
font-weight: 700;
letter-spacing: -0.28px;
line-height: normal;
position: relative;
white-space: nowrap;
width: fit-content;
`;

export const ButtonLogOut = ({}) => {
    return (
        <MyButton>
            <TextWrapper>Hola</TextWrapper>
        </MyButton>
    );
};
