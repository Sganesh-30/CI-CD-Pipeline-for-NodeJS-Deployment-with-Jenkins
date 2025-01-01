const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, CI/CD Pipeline with Jenkins!');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };  // Export both app and server
