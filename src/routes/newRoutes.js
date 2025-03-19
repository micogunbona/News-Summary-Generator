const express = require('express');
const router = express.Router();
const { getNewsFeed, getNewsSummary } = require('../controllers/newsController');

router.get('/feed', getNewsFeed);         // Get news feed
router.post('/summarize', getNewsSummary); // Summarize an article

module.exports = router;