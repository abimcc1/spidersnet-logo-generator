const CLICKUP_API_TOKEN = 'your_clickup_api_token'; // Replace with your ClickUp API token
const CLICKUP_LIST_ID = 'your_clickup_list_id';  // Replace with your specific List ID

// The function that creates the ClickUp task
async function createClickUpTask(taskName, taskDescription) {
  const response = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CLICKUP_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: taskName,
      description: taskDescription,
      assignees: [],
      tags: [],
    }),
  });

  if (response.ok) {
    const task = await response.json();
    return task;
  } else {
    throw new Error(`Failed to create task. Status: ${response.status}`);
  }
}

// The `onRequest` function handles the incoming HTTP request
export async function onRequest(context) {
  const { request } = context;

  // Log the incoming request details
  console.log(`Received ${request.method} request to ${request.url}`);
  console.log('Request headers:', JSON.stringify([...request.headers]));

  // Check the request method
  if (request.method === 'POST') {
    try {
      // Parse the request body (expecting JSON)
      const { taskName, taskDescription } = await request.json();

      // Log the request data (task name and description)
      console.log('Task data received:', { taskName, taskDescription });

      // Call the function to create the ClickUp task
      const task = await createClickUpTask(taskName, taskDescription);
      console.log('Task created successfully:', task);

      // Return the created task as a JSON response
      return new Response(JSON.stringify({ task }), { status: 200 });
    } catch (error) {
      // Log the error details
      console.error('Error creating task:', error);

      // Return the error response with a detailed message
      return new Response(
        JSON.stringify({ error: error.message, stack: error.stack }),
        { status: 500 }
      );
    }
  } else {
    // Log that an invalid method was used
    console.warn(`Invalid request method: ${request.method}`);
    return new Response('Invalid request method', { status: 405 });
  }
}
