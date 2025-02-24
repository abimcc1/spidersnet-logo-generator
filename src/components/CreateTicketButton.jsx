import React, { useState } from 'react';

const CreateTicketButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateTicket = async () => {
    setLoading(true);
    setError(null);

    const taskData = {
      taskName: "New Task from React", // Example task name
      taskDescription: "This is a task created by a button click in React", // Example description
    };

    try {
      const response = await fetch('https://spidersnet-logo-generator.pages.dev/createclickuptask', { // Replace with your worker URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Ticket created successfully!');
      } else {
        setError(data.error || 'Failed to create ticket');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
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
