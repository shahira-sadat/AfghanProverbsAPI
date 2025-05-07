const fs = require('fs');
const path = require('path');

const dataPath = path.join('./data/proverbs.json');

function getProverbs() {
  return JSON.parse(fs.readFileSync(dataPath));
}

function saveProverbs(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

module.exports = { getProverbs, saveProverbs };
