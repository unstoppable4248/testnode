const express = require('express');
const app = express();
const port = 3000;

// Middleware to log path, URL, and domain
app.use((req, res, next) => {
  console.log('Path:', req.path);
  console.log('URL:', req.protocol + '://' + req.get('host') + req.originalUrl);
  console.log('Domain:', req.get('host'));
  next();
});

// Route handler for any route
app.all('*', (req, res) => {
  res.send('Hello, you have reached an unknown route!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
