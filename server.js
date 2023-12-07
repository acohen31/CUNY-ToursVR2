const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/vr', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public/vr.html'));
  });
  
// Put all API endpoints under '/api'
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from server!" });
});

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
