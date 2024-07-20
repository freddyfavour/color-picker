import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);

  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
  ];

  const handleClick = (color) => {
    navigator.clipboard.writeText(color.hex);
    setSelectedColor(color);
  };

  const handleMouseEnter = (index) => {
    setFocusedIndex(index);
  };

  const handleMouseLeave = () => {
    setFocusedIndex(null);
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      handleClick(colors[index]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-poppins bg-slate-300">
      <h1 className="text-2xl mb-4">Color Picker</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-[15rem] h-[15rem] flex items-center justify-center cursor-pointer rounded-lg transition-transform duration-200 ${
              focusedIndex === index ? "transform scale-110" : ""
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {focusedIndex === index && (
              <span className="text-white font-bold">{color.name}</span>
            )}
            {selectedColor.hex === color.hex && (
              <span className="text-white font-bold">{selectedColor.hex}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
