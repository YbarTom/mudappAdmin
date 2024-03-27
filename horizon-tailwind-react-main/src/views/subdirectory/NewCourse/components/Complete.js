// Complete.js
import React, { useState } from "react";
import TextAreaEditor from "./TextAreaComplete";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";
import { ButtonLogOut } from "./randomButton";
import styled from "styled-components";

const ScrollableContainer = styled.div`
    margin: 20px;
    height: calc(100vh - 250px);
    overflow-y: auto;
`;

const Complete = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [incorrects, setIncorrects] = useState([]);
    const [textareaContent, setTextareaContent] = useState(""); 

    const handleSave = () => {
        const JSON = {
            title: textareaContent,
            subtitle: "Subtitle",
            respostes: flashcards.map((flashcard, index) => ({ espacio: index, text: flashcard, isCorrect: true })),
        };
        console.log(JSON);
    };

    const handleFlashcardsChange = (newFlashcards) => {
        setFlashcards(newFlashcards);
    };

    const handleIncorrectsChange = (newIncorrects) => {
        setIncorrects(newIncorrects);
    };

    const addFlashcard = (text) => {
        setFlashcards([...flashcards, text]);
    };

    const handleFlashcardTextChange = (index, newText) => {
        const updatedFlashcards = [...flashcards];
        updatedFlashcards[index] = newText;
        setFlashcards(updatedFlashcards);
    };

    return (
        <ScrollableContainer>
            <h1>Complete</h1>
            <TextAreaEditor onFlashcardsChange={handleFlashcardsChange} setContent={setTextareaContent} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {flashcards.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} index={index} clickHandler={handleFlashcardTextChange} />
                ))}
            </div>
            <p><b>Incorrects:</b></p>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px" }}>
                {incorrects.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} />
                ))}
                <ButtonFlashCardPlus clickHandler={() => addFlashcard("Patata")} />
            </div>
            <div style={{ marginTop: "20px" }}>
                <ButtonLogOut text={"Save"} type={"blue"} clickHandler={handleSave} />
            </div>
        </ScrollableContainer>
    );
};

export default Complete;
