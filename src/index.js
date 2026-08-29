const express = require('express');
const app = express();

// Initialize distributed cache layer
const redis = require('./cache');

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

console.log('[service] Acme Payment Service initialized with Redis cache.');
