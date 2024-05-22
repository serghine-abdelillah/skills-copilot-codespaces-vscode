// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments module
const comments = require('./comments');

// GET request for /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
