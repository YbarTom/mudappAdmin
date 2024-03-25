import React, { useState } from "react";
import TextAreaEditor from "./TextAreaComplete";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";

const Complete = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [incorrects, setIncorrects] = useState([]);

    const handleFlashcardsChange = (newFlashcards) => {
        setFlashcards(newFlashcards);
    };

    const handleIncorrectsChange = (newIncorrects) => {
        setIncorrects(newIncorrects);
    };

    const addFlashcard = (text) => {
        setIncorrects([...incorrects, text]);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h1>Complete</h1>
            <TextAreaEditor onFlashcardsChange={handleFlashcardsChange} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {flashcards.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} />
                ))}
            </div>
            <p><b>Incorrects:</b></p>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px" }}>
                {incorrects.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} />
                ))}
                <ButtonFlashCardPlus clickHandler={() => addFlashcard("Patata")} />
            </div>
        </div>
    );
};

export default Complete;
