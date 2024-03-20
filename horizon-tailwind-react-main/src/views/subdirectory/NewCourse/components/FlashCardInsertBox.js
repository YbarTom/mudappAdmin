import React, { useState } from "react";
import FlashCardBar from "./FlashCardBar";
import MultipleChoice from "./MultipleChoice";
import Relate from "./Relate";
import TrueFalse from "./TrueFalse";
import Complete from "./Complete";

const FlashCardInsertBox = () => {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const handleComponentSelect = (index) => {
    setSelectedComponent(index);
  };

  let componentToDisplay;
  switch (selectedComponent) {
    case 0:
      componentToDisplay = <Complete />;
      break;
    case 1:
      componentToDisplay = <MultipleChoice />;
      break;
    case 2:
      componentToDisplay = <TrueFalse />;
      break;
    case 3:
        componentToDisplay = <Relate />;
      break;
    default:
      componentToDisplay = null;
  }

  return (
    <div style={{ backgroundColor: "white", gridColumn: '2 / span 2', borderRadius: "16px", marginLeft: "15px" }}>
      <FlashCardBar onSelect={handleComponentSelect} />
      {componentToDisplay}
    </div>
  );
};

export default FlashCardInsertBox;
