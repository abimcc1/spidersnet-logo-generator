// The function that creates the ClickUp task using a personal API Key
async function createClickUpTask(taskName, taskDescription) {
  const CLICKUP_API_KEY = 'pk_8727201_DILQ5NE4YYIR1V18E4OC43G9MW8HYMVG'; // Replace with your personal ClickUp API key
  const CLICKUP_LIST_ID = '901508351342'; // Replace with your ClickUp List ID

  const response = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
    method: 'POST',
    headers: {
      'Authorization': `${CLICKUP_API_KEY}`, // Use the personal API key without 'Bearer'
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: taskName,
      description: taskDescription,
    }),
  });

  if (response.ok) {
    const task = await response.json();
    return task; // Return the created task
  } else {
    // Log the error and throw it
    const errorDetails = await response.text();
    console.error('Error response from ClickUp:', errorDetails);
    throw new Error(`Failed to create task. Status: ${response.status}, Details: ${errorDetails}`);
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
