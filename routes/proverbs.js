const express = require('express');
const { getProverbs, saveProverbs } = require('../utils/fileHelper');

const router = express.Router();

function proverbsRoutes() {
    router.get('/', (req, res) => {
        let proverbs = getProverbs();
        const { category, search } = req.query;

        if (category) {
            proverbs = proverbs.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase());
        }

        if (search) {
            proverbs = proverbs.filter(p =>
                p.textDari.includes(search) ||
                p.textPashto.includes(search) ||
                p.translationEn.toLowerCase().includes(search.toLowerCase())
            );
        }

        res.json(proverbs);
    });

    router.get('/random', (req, res) => {
        const proverbs = getProverbs();
        const random = proverbs[Math.floor(Math.random() * proverbs.length)];
        res.json(random);
    });

    router.get('/:id', (req, res) => {
        const proverbs = getProverbs();
        const proverb = proverbs.find(p => p.id === parseInt(req.params.id));
        proverb ? res.json(proverb) : res.status(404).send('Proverb not found');
    });

    router.post('/', (req, res) => {
        const proverbs = getProverbs();
        const newProverb = { id: proverbs.length + 1, ...req.body };
        proverbs.push(newProverb);
        saveProverbs(proverbs);
        res.status(201).json(newProverb);
    });

    router.put('/:id', (req, res) => {
        const proverbs = getProverbs();
        const index = proverbs.findIndex(p => p.id === parseInt(req.params.id));
        if (index !== -1) {
            proverbs[index] = { id: parseInt(req.params.id), ...req.body };
            saveProverbs(proverbs);
            res.json(proverbs[index]);
        } else {
            res.status(404).send('Proverb not found');
        }
    });

    router.delete('/:id', (req, res) => {
        let proverbs = getProverbs();
        const index = proverbs.findIndex(p => p.id === parseInt(req.params.id));
        if (index !== -1) {
            const deleted = proverbs.splice(index, 1);
            saveProverbs(proverbs);
            res.json(deleted);
        } else {
            res.status(404).send('Proverb not found');
        }
    });

    return router;
}

module.exports = proverbsRoutes;
