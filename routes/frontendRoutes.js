const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const category = req.query.category || '';
  const search = req.query.search || '';
  const response = await axios.get(`http://localhost:3000/proverbs`, {
    params: { category, search }
  });
  res.render('index', { proverbs: response.data });
});

router.get('/random', async (req, res) => {
  const response = await axios.get(`http://localhost:3000/proverbs/random`);
  res.render('random', { proverb: response.data });
});

router.get('/proverb/:id', async (req, res) => {
  const response = await axios.get(`http://localhost:3000/proverbs/${req.params.id}`);
  res.render('proverb', { proverb: response.data });
});

router.get('/add', (req, res) => {
  res.render('add');
});

router.get('/edit/:id', async (req, res) => {
  const response = await axios.get(`http://localhost:3000/proverbs/${req.params.id}`);
  res.render('edit', { proverb: response.data });
});

router.post('/proverb', async (req, res) => {
  try {
    await axios.post('http://localhost:3000/proverbs', req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Failed to add proverb.');
  }
});

router.put('/proverb/:id', async (req, res) => {
  try {
    await axios.put(`http://localhost:3000/proverbs/${req.params.id}`, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Failed to update proverb.');
  }
});

router.delete('/proverb/:id', async (req, res) => {
  try {
    await axios.delete(`http://localhost:3000/proverbs/${req.params.id}`);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error deleting proverb.');
  }
});

module.exports = router;
