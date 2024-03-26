import React, { useState } from "react";
import styled from "styled-components";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";
import { ButtonLogOut } from "./randomButton";

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /* Alinea verticalmente los elementos */
    margin-bottom: 10px;
`;

export const RelateComponent = () => {

    const [pairs, setPairs] = useState([
        {
            question1: "add text",
            question2: "add text"
        }
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedPairs = [...pairs];
        updatedPairs[index][field] = value;
        setPairs(updatedPairs);
    };

    const handleClickPlus = () => {
        setPairs(prevPairs => [
          ...prevPairs,
          {
            question1: "add text",
            question2: "add text"
          }
        ]);
    };

    return (
        <div style={{  height: "calc(100vh - 275px)"
        }}>
            {pairs.map((pair, index) => (
                <div key={index}>
                    <p>{`Pregunta ${index+1}`}</p>
                    <InputContainer>
                        <ButtonFlashCard
                            initialText={pair.question1}
                            onChange={(value) => handleInputChange(index, "question1", value)}
                        />
                        <ButtonFlashCard
                            initialText={pair.question2}
                            onChange={(value) => handleInputChange(index, "question2", value)}
                        />
                    </InputContainer>
                </div>
            ))}
            <ButtonFlashCardPlus clickHandler={handleClickPlus} />
            <div style={{marginTop:"20px"}}>
            <ButtonLogOut text={"Save"} type={"blue"} />
            </div>
        </div>
    );
};
