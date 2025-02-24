export default {
  async fetch(req, env) {
    return new Response('Hello, World!');
  }
};
// // functions/create-ticket.js

// export default {
//     async fetch(req, env) {
//       // Now the 'env' object is passed into the 'fetch' handler
  
//       const apiKey = env.CLICKUP_API;  // Access environment variables via the 'env' object
//       const listId = env.CLICKUP_LIST;
  
//       // Your ClickUp API logic here
//       const formData = await req.json();
  
//       const taskData = {
//         name: formData.name,
//         description: formData.description,
//         priority: formData.priority,
//         due_date: formData.dueDate,
//       };
  
//       const url = `https://api.clickup.com/api/v2/list/${listId}/task`;
  
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Authorization': apiKey,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(taskData),
//       });
  
//       if (!response.ok) {
//         return new Response('Error creating ClickUp task', { status: 500 });
//       }
  
//       const task = await response.json();
//       return new Response(JSON.stringify({ success: true, task }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     },
//   };