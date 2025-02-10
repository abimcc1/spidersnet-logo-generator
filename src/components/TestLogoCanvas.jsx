import React, { useRef, useEffect } from 'react';

const TestLogoCanvas = () => {
  const canvasRef = useRef(null);

  // Draw on canvas when component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Example: Draw a simple logo (a circle with text)
    context.fillStyle = '#FF5733'; // Set color for the circle
    context.beginPath();
    context.arc(150, 150, 100, 0, Math.PI * 2); // Draw circle
    context.fill(); // Fill the circle

    context.fillStyle = '#FFFFFF'; // Set color for the text
    context.font = '30px Arial'; // Set font style
    context.fillText('Logo', 120, 170); // Add text on top of circle
  }, []);

  // Function to trigger download of canvas content
  const downloadLogo = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png'); // Export as PNG
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'logo.png'; // File name
    link.click();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="300"
        height="300"
        style={{ border: '1px solid black' }}
      ></canvas>
      <button onClick={downloadLogo}>Download Logo</button>
    </div>
  );
};

export default TestLogoCanvas;