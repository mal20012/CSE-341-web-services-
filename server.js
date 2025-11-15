const express = require('express');
const app = express();
const port = 3000;

// Sample data
const frontendData = [
  { id: 1, title: "Item 1", description: "Description 1" },
  { id: 2, title: "Item 2", description: "Description 2" }
];

// GET all items
app.get('/api/data', (req, res) => {
  res.json(frontendData);
});

// GET item by ID
app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = frontendData.find(d => d.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

