const express = require('express');
const app = express();
const port = 3000;

const frontendData = {
  title: "My Web Service",
  description: "This data comes from the backend!",
  image: "data:image/png;base64,iVBORw0K...", // base64 string
  link: "https://example.com"
};

app.get('/api/data', (req, res) => {
  res.json(frontendData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

