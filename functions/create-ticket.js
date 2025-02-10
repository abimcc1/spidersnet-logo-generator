// index.js (Cloudflare Worker)

const CLICKUP_API_KEY = 'BVIBNXPCE5WHT7SCJASY00O2ZH30YGT7';  // Your ClickUp API Key
const LIST_ID = '901508351342';  // The list ID in ClickUp

async function createClickUpTask(formData) {
  const url = `https://api.clickup.com/api/v2/list/${LIST_ID}/task`;
  
  const taskData = {
    name: formData.name, // e.g., task title
    description: formData.description, // e.g., task details
    priority: formData.priority, // e.g., task priority (optional)
    due_date: formData.dueDate, // e.g., task due date (optional)
  };

  const headers = {
    'Authorization': CLICKUP_API_KEY,
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(taskData)
  });

  if (!response.ok) {
    throw new Error('Failed to create ClickUp task');
  }

  return await response.json(); // Return the response from ClickUp
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'POST') {
    try {
      const formData = await request.json();

      // Create a task in ClickUp
      const task = await createClickUpTask(formData);

      return new Response(JSON.stringify({ success: true, task }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } else {
    return new Response('Invalid Request Method', { status: 405 });
  }
}
