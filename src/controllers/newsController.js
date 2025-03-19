const { fetchNews } = require('../services/newsService');
const { summarizeArticle } = require('../services/summaryService');

const getNewsFeed = async (req, res, next) => {
  try {
    const articles = await fetchNews();
    res.json(articles);
  } catch (error) {
    next(error);
  }
};

const getNewsSummary = async (req, res, next) => {
  try {
    const { articleText } = req.body; // Expect article text from client
    if (!articleText) {
      return res.status(400).json({ error: 'Article text is required' });
    }
    const summary = await summarizeArticle(articleText);
    res.json({ summary });
  } catch (error) {
    next(error);
  }
};

module.exports = { getNewsFeed, getNewsSummary };