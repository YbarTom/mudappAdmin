import React, { useState } from "react";
import TextAreaEditor from "./TextAreaWithoutButton";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";

const MultipleChoice = () => {

    return (
        <div style={{ margin: "20px" }}>
            <h1>Multiple Choice</h1>
            <TextAreaEditor />
            <p><b>Respuestas Correctas:</b></p>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <ButtonFlashCard text={"Patata"} />
                <ButtonFlashCardPlus />
            </div>
            <p><b>Respuestas Incorrectas:</b></p>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <ButtonFlashCard text={"Pera"} />
                <ButtonFlashCard text={"Poma"} />
                <ButtonFlashCard text={"Sindria"} />
                <ButtonFlashCard text={"Banana"} />

                <ButtonFlashCardPlus />
            </div>
        </div>
    );
};

export default MultipleChoice;
