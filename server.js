// server.js
const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static('public')); // Serve index.html and frontend assets

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});