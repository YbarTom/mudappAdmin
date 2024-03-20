import React, { useState } from "react";

const FlashCardBar = ({ onSelect }) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
    onSelect(index); // Llamar a la función onSelect pasada a través de las props
  };

  return (
    <div style={{ height: "86px", width: "100%", borderTopLeftRadius: "16px", borderTopRightRadius: "16px", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
      <div style={{ borderTopLeftRadius: "16px", borderRight: "1px solid black", borderBottom: selected === 0 ? "none" : "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleSelect(0)}>Complete</div>
      <div style={{ borderRight: "1px solid black", borderBottom: selected === 1 ? "none" : "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleSelect(1)}>Multiple Choice</div>
      <div style={{ borderRight: "1px solid black", borderBottom: selected === 2 ? "none" : "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleSelect(2)}>True False</div>
      <div style={{ borderTopRightRadius: "16px", borderBottom: selected === 3 ? "none" : "1px solid black", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => handleSelect(3)}>Relate</div>
    </div>
  );
};

export default FlashCardBar;
