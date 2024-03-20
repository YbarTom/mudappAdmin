import React, { useState } from "react";
import FlashCardBar from "./FlashCardBar";
import MultipleChoice from "./MultipleChoice";

const FlashCardInsertBox = () => {
  

  return (
    <div style={{ backgroundColor: "white", gridColumn: '2 / span 2', borderRadius: "16px", marginLeft: "15px" }}>
        <FlashCardBar />
        <MultipleChoice />
      </div>
  );
};

export default FlashCardInsertBox;
