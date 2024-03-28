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

const ScrollableContainer = styled.div`
    height: calc(100vh - 275px);
    overflow-y: auto;
`;

export const RelateComponent = ({ idLesson }) => {

    const [pairs, setPairs] = useState([
        {
            question1: "add text",
            question2: "add text"
        }
    ]);

    const handleInputChangeRelate = (index, field, value) => {

        console.log(pairs[index][field])

        const newPairs = [...pairs];
        newPairs[index][field] = value;
        setPairs(newPairs);
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

    const [title, setTitle] = useState("");
    const handleChangeTitle = (event) => {
        setTitle(event.target.value); // Actualiza el estado del título
    };

    const crearFlashCard = () => {
        console.log(pairs)

        const flashCardEnviar = {
            id: 0,
            idLesson: idLesson, // Assuming idLesson is defined somewhere
            type: "LessonRelate",
            title: title, // Assuming title is defined somewhere
            subtitle: "subtitle222",
            options: [],
            correctValues: []
        };

        console.log(flashCardEnviar);
    };

    return (
        <ScrollableContainer>
            <input
                type="text"
                placeholder="Ingresa el título"
                value={title}
                onChange={handleChangeTitle}
            />
            {pairs.map((pair, index) => (
                <div key={index}>
                    <p>{`Pregunta ${index + 1}`}</p>
                    <InputContainer>
                        <ButtonFlashCard
                            initialText={pair.question1}
                            clickHandler={(value) => handleInputChangeRelate(index, "question1", value)}
                        />
                        <ButtonFlashCard
                            initialText={pair.question2}
                            clickHandler={(value) => handleInputChangeRelate(index, "question2", value)}
                        />
                    </InputContainer>
                </div>
            ))}
            <ButtonFlashCardPlus clickHandler={handleClickPlus} />
            <div style={{ marginTop: "20px" }}>
                <ButtonLogOut text={"Save"} type={"blue"} clickHandler={crearFlashCard} />
            </div>
        </ScrollableContainer>
    );
};
