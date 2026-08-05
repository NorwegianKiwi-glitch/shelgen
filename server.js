const express = require('express');
const path    = require('path');
const app     = express();
const port    = process.env.PORT || 3000;

// serve public/ for CSS/JS/etc
app.use(express.static(path.join(__dirname, 'public')));

// root → public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// /exitnode → public/exitnode.html
app.get('/exitnode', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'exitnode.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://192.168.1.174:${port}`);
});

