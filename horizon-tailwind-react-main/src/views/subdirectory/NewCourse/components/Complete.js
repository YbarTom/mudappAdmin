import React, { useState } from "react";
import TextAreaEditor from "./TextAreaComplete";
import ButtonFlashCard from "./ButtonFlashCard";

const Complete = () => {
    const [flashcards, setFlashcards] = useState([]);

    const handleFlashcardsChange = (newFlashcards) => {
        setFlashcards(newFlashcards);
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
        </div>
    );
};


export default Complete;
