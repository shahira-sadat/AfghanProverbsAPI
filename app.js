const express = require('express');
const fs = require('fs');
const path = require('path');
const proverbsRoutes = require('./routes/proverbs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


if (!fs.existsSync('data')) fs.mkdirSync('data');
if (!fs.existsSync('data/proverbs.json')) fs.writeFileSync('data/proverbs.json', '[]');

app.use('/proverbs', proverbsRoutes());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
