import React, { useState } from 'react';

const CreateTicketButton = () => {
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateTicket = async () => {
    const taskData = {
      taskName: "New Task from React", // Example task name
      taskDescription: "This is a task created by a button click in React", // Example description
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
    <div>
      <button onClick={handleCreateTicket} disabled={loading}>
        {loading ? 'Creating Ticket...' : 'Create ClickUp Ticket'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateTicketButton;
