const express = require('express') 
const axios = require('axios')
require('dotenv').config();

//create an Express router
const router = express.Router();

// Route to fetch top headlines
router.get('/news', async (req, res) => {
    try {
      const newsResponse = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
      );
      const newsArticles = newsResponse.data.articles;

      // Send the list of news articles as a JSON response
    res.json({ articles: newsArticles });
} catch (error) {
  console.error(error);
  res.status(500).send('Error fetching news articles');

    }
});

module.export = router;

