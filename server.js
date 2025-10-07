// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = 8080;

app.use(express.static('public')); // Serve index.html and frontend assets

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});