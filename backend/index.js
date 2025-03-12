const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Add a simple hello world endpoint for troubleshooting
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});