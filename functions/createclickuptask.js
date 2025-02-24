const CLICKUP_API_TOKEN = 'Y264VXVIWMPQ4SS9KHWV2L123JRGP84K'; // Replace with your ClickUp API token
const CLICKUP_LIST_ID = '901508351342';  // Replace with your specific List ID

// The function that creates the ClickUp task
async function createClickUpTask(taskName, taskDescription) {
  const response = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
    method: 'POST',
    headers: {
      'Authorization': CLICKUP_API_TOKEN,
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
    throw new Error('Failed to create task');
  }
}

// The `onRequest` function handles the incoming HTTP request
export async function onRequest(context) {
  const { request } = context;
  
  if (request.method === 'POST') {
    const { taskName, taskDescription } = await request.json();
    
    try {
      const task = await createClickUpTask(taskName, taskDescription);
      return new Response(JSON.stringify({ task }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  } else {
    return new Response('Invalid request method', { status: 405 });
  }
}
