import { useCallback, useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState<"hex" | "rgb">("hex");
  const [color, setColor] = useState<string>("#000");

  function randomNumber(): number {
    return Math.floor(Math.random() * 256);
  }

  const handleCreateRandomHexColor = useCallback(() => {
    const hexColor = `#${randomNumber().toString(16)}${randomNumber().toString(
      16
    )}${randomNumber().toString(16)}`;
    setColor(hexColor);
  }, []);

  const handleCreateRandomRgbColor = useCallback(() => {
    const rgb = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
    setColor(rgb);
  }, []);

  const handleCreateRandomColor = useCallback(() => {
    if (typeOfColor === "hex") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [handleCreateRandomHexColor, handleCreateRandomRgbColor, typeOfColor]);

  useEffect(() => {
    handleCreateRandomColor();
  }, [typeOfColor, handleCreateRandomColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center"
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px"
        }}
      >
        <h2>{typeOfColor.toUpperCase() + " Color"}</h2>
        {color}
      </div>
    </div>
  );
}
