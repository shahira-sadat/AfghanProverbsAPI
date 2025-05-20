const express = require('express');
const fs = require('fs');
const path = require('path');
const methodOverride = require('method-override');
const proverbsRoutes = require('./routes/proverbs');
const frontendRoutes = require('./routes/frontendRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ensure data directory and file exist
if (!fs.existsSync('data')) fs.mkdirSync('data');
if (!fs.existsSync('data/proverbs.json')) fs.writeFileSync('data/proverbs.json', '[]');

// Backend API routes (JSON responses)
app.use('/proverbs', proverbsRoutes());

// Frontend routes (EJS rendered pages)
app.use('/', frontendRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
