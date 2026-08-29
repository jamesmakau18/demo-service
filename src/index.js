const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

console.log('[service] Acme Payment Service initialized successfully.');
