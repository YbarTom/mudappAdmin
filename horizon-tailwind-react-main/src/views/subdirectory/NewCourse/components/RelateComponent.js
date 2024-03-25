import React, { useState } from "react";
import styled from "styled-components";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";
import ButtonFlashCard from "./ButtonFlashCard";

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /* Alinea verticalmente los elementos */
    margin-bottom: 10px;
`;

const InputField = styled.input`
    width: 45%;
    padding: 5px;
    border: 1px solid black; /* Borde de 1px de grosor y color negro */
    border-radius: 5px; /* Bordes redondeados */
    outline: none; /* Quita el borde predeterminado cuando se enfoca */
`;

export const RelateComponent = () => {

    const [pairs, setPairs] = useState([
        {
            question1: "",
            question2: ""
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
            question1: "",
            question2: ""
        }
        ]);
      };

    return (
        <div>
            {pairs.map((pair, index) => (
                <div>
                    <p>{`Pregunta ${index+1}`}</p>
                    <InputContainer key={index}>

                        <InputField
                            type="text"
                            value={pair.question1}
                            onChange={(e) => handleInputChange(index, "question1", e.target.value)}
                        />
                        <InputField
                            type="text"
                            value={pair.question2}
                            onChange={(e) => handleInputChange(index, "question2", e.target.value)}
                        />
                    </InputContainer>
                </div>
            ))}
            <ButtonFlashCardPlus clickHandler={handleClickPlus} />
        </div>
    );
};
