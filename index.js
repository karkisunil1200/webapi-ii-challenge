const express = require('express');

const blogPost = require('./blogs/bolgs-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to Blog Post</h2>`);
});

server.use('/api/posts', blogPost);

server.listen(4000, () => {
  console.log('\n*** Server running on http://localhost:4000 ***\n');
});
