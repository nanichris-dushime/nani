const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const publicDir = path.join(__dirname, 'public');
const pagesDir = path.join(publicDir, 'pages');
const indexFile = path.join(pagesDir, 'index.html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicDir));
app.use('/pages', express.static(pagesDir));

app.get('/', (req, res) => {
  res.sendFile(indexFile);
});

app.get(/.*/, (req, res) => {
  res.sendFile(indexFile);
});

app.listen(PORT, () => {
  console.log(`Your frontend is running on http://localhost:${PORT}`);
});
