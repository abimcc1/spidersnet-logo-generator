const CLICKUP_API_TOKEN = 'your_clickup_api_token'; // Replace with your ClickUp API token
const CLICKUP_TEAM_ID = 'your_clickup_team_id';  // Replace with your ClickUp Team ID
const CLICKUP_LIST_ID = 'your_clickup_list_id';  // Replace with the specific List ID

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

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
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
