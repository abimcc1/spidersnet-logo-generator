import React, { useRef } from "react";
import html2canvas from "html2canvas";

const LogoGenerator = () => {
  const captureRef = useRef(null);

  const handleDownload = () => {
    if (captureRef.current) {
      // Use html2canvas to capture the content inside the div
      html2canvas(captureRef.current).then((canvas) => {
        // Convert the canvas to a data URL (PNG format)
        const dataUrl = canvas.toDataURL("image/png");

        // Create a temporary link to download the image
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "logo.png"; // Name the downloaded file
        link.click(); // Simulate the click to start the download
      });
    }
  };

  return (
    <div>
      <div
        id="canvasCapture"
        ref={captureRef}
        style={{
          width: "400px",
          height: "300px",
          border: "1px solid #ccc",
        }}
      >
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Logo Image"
            style={{ width: "200px", marginBottom: "20px" }}
          />
          <h1>Your Brand</h1>
        </div>
      </div>

      <button onClick={handleDownload}>Download Logo</button>
    </div>
  );
};

export default LogoGenerator;
