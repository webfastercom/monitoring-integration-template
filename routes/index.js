const express = require('express');
const axios = require('axios');

const env = require('../env');

const router = express.Router();

// Start writing your integration here

router.get('/', async (req, res) => {
  return res.sendStatus(200);
}) // route-end

// required setup route
router.get('/setup', (req, res) => {
  return res.status(200).json('setup route');
}) // route-end

module.exports = router;
