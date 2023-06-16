const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'todo.html'));
});

app.post('/api/todo', (req, res) => {
  const todoItem = req.body;
  console.log('Received to-do item from client:', todoItem);
  res.json({ message: 'To-do item received successfully' });
});

app.listen(port, () => {
  console.log(`To-Do List app is running at http://localhost:${port}`);
});
