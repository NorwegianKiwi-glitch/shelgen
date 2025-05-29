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

app.get('/exitnode.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'exitnode.html'));
});

// add more routes similarly:
app.get('/info', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'info.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://192.168.1.217:${port}`);
});

