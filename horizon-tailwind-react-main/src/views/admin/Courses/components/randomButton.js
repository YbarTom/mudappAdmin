import { styled} from "styled-components";

const MyButton = styled.button`
all: unset;
align-items: center;
border-radius: 16px;
box-sizing: border-box;
display: inline-flex;
gap: 10px;
height: 58px;
padding: 20px ;
position: relative;
width: 100%;
margin: 0 auto;
`;


const TextWrapper = styled.div`
font-family: "Manrope-Bold", Helvetica;
font-size: 14px;
font-weight: 700;
letter-spacing: -0.28px;
line-height: normal;
position: relative;
white-space: nowrap;
width: fit-content;
`;

export const ButtonLogOut = ({text}) => {
    return (
        <MyButton className="!bg-white dark:!bg-navy-700">
            <TextWrapper className="text-navy-700 dark:text-white">{text}</TextWrapper>
        </MyButton>
    );
};
