import React, { useState } from "react";
import InsertQuestion from "./InsertQuestion";
import ButtonFlashCard from "./ButtonFlashCard";

const MultipleChoice = () => {

    return (
        <div style={{ margin: "20px" }}>
            <h1>Multiple Choice</h1>
            <InsertQuestion />
            <ButtonFlashCard text={"Add Answer"} />
        </div>
    );
};

export default MultipleChoice;
