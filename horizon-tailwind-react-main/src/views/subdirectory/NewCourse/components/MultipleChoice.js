import React, { useState } from "react";
import TextAreaEditor from "./TextAreaWithoutButton";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";
import { ButtonLogOut } from "./randomButton";

const MultipleChoice = () => {
    const [corrects, setCorrects] = useState([]);
    const [incorrects, setIncorrects] = useState([]);
    const [textareaContent, setTextareaContent] = useState("");

    const handleSave = () => {

        const allFlashcards = [
            ...corrects.map((flashcard, index) => ({ text: flashcard, isCorrect: true })),
            ...incorrects.map((incorrect, index) => ({ text: incorrect, isCorrect: false })),
        ];

        const JSON = {
            title: textareaContent,
            subtitle: "Subtitle",
            respostes: allFlashcards,
        };
        console.log(JSON);
    };

    const handleIncorrectsChange = (newIncorrects) => {
        setIncorrects(newIncorrects);
    };

    const handleCorrectsChange = (newCorrects) => {
        setCorrects(newCorrects);
    };

    const addIncorrect = (text) => {
        setIncorrects([...incorrects, text]);
    };

    const addCorrect = (text) => {
        setCorrects([...corrects, text]);
    };

    const handleIncorrectsTextChange = (index, newText) => {
        const updatedIncorrects = [...incorrects];
        updatedIncorrects[index] = newText;
        setIncorrects(updatedIncorrects);
    };

    const handleCorrectsTextChange = (index, newText) => {
        const updatedCorrects = [...corrects];
        updatedCorrects[index] = newText;
        setCorrects(updatedCorrects);
    };

    return (
        <div style={{
            margin: "20px", height: "calc(100vh - 250px)", overflowY: "auto"
        }}>
            <h1>Multiple Choice</h1>
            <TextAreaEditor setContent={setTextareaContent} />
            <p><b>Respuestas Correctas:</b></p>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px" }}>
                {corrects.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} clickHandler={handleCorrectsTextChange} index={index} />
                ))}
                <ButtonFlashCardPlus clickHandler={() => addCorrect("pera")} />
            </div>
            <p><b>Respuestas Incorrectas:</b></p>
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px" }}>
                {incorrects.map((text, index) => (
                    <ButtonFlashCard key={index} text={text} clickHandler={handleIncorrectsTextChange} index={index} />
                ))}
                <ButtonFlashCardPlus clickHandler={() => addIncorrect("pera")} />
            </div>
            <div style={{ marginTop: "20px" }}>
                <ButtonLogOut text={"Save"} type={"blue"} clickHandler={handleSave} />
            </div>
        </div>
    );
};

export default MultipleChoice;
