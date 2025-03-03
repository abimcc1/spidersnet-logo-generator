import React, { useState } from 'react';

const CreateTicketButton = ({ companyName, slogan, icon, fontFamily, fontColour, accentColour, logoFontSize, logoFontSpacing, generatedURL }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  const handleCreateTicket = async () => {
    const taskData = {
      taskName: `Logo Generator - ${companyName}`, // Example task name
      taskDescription: `${generatedURL}
      Icon style: ${icon}
      Company Name: ${companyName}
      Slogan: ${slogan}
      Font Family: ${fontFamily}
      Font Colour: ${fontColour}
      Accent Colour: ${accentColour}
      Font Size: ${logoFontSize}
      Font Spacing: ${logoFontSpacing}
      `, 
    };
  
    try {
      const response = await fetch('https://spidersnet-logo-generator.pages.dev/createclickuptask', { // Replace with your worker URL
        method: 'POST',  // Ensure this is POST
        headers: {
          'Content-Type': 'application/json',  // Set correct content-type
        },
        body: JSON.stringify(taskData),  // Body of the request
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Ticket created successfully!');
      } else {
        alert('Error: ' + data.error || 'Failed to create ticket');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  

  return (
    <>
      <a onClick={handleCreateTicket} className="next-button text"  disabled={loading}>
        {loading ? 'Creating Ticket...' : 'Ready!'}
      </a>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default CreateTicketButton;
