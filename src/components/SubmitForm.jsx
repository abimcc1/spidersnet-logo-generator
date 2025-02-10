// import React, { useState } from 'react';

// const Form = () => {

//     console.log('function');
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name,
//       description,
//       priority,
//       dueDate,
//     };

//     try {
//       const response = await fetch('/create-ticket', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert('Ticket created successfully!');
//       } else {
//         alert('Error creating ticket: ' + result.error);
//       }
//     } catch (error) {
//       alert('Error: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name</label>
//         <input 
//           type="text" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//         />
//       </div>
//       <div>
//         <label>Description</label>
//         <textarea 
//           value={description} 
//           onChange={(e) => setDescription(e.target.value)} 
//         />
//       </div>
//       <div>
//         <label>Priority</label>
//         <select 
//           value={priority} 
//           onChange={(e) => setPriority(e.target.value)}
//         >
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//       </div>
//       <div>
//         <label>Due Date</label>
//         <input 
//           type="date" 
//           value={dueDate} 
//           onChange={(e) => setDueDate(e.target.value)} 
//         />
//       </div>
//       <button type="submit">Create Task</button>
//     </form>
//   );
// };

// export default Form;
