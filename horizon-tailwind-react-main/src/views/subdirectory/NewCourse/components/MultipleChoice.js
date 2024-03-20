import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import ButtonFlashCard from "./ButtonFlashCard";
import ButtonFlashCardPlus from "./ButtonFlashCardPlus";

const MultipleChoice = () => {

    return (
        <div style={{ margin: "20px" }}>
            <h1>Multiple Choice</h1>
            <InsertQuestion />
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <div>
                <ButtonFlashCard text={"Add Answer"} />
                </div>
                <ButtonFlashCardPlus />
            </div>
        </div>
    );
};

export default MultipleChoice;
