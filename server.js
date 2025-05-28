const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the environment variable PORT or 3000 if not set

// Serve static files from the 'public' directory (or your project root)
// If your HTML, CSS, and client-side JS are in the root, you can use __dirname
app.use(express.static(__dirname));

// Define a route to serve your main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
