const express = require('express');
const { getSpeciesRangeData } = require('../controllers/speciesRangeController');

const router = express.Router();

router.get('/data', getSpeciesRangeData);

module.exports = router;
