import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  function handleGenerateQrCode(): void {
    setQrCode(input);
    setInput("")
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button
          disabled={!input || !input.trim()}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
}
