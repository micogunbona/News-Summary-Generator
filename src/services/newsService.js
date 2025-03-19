const NewsAPI = require('newsapi');
const config = require('../config/config');

const newsapi = new NewsAPI(config.newsApiKey);

async function fetchNews() {
  try {
    const response = await newsapi.v2.topHeadlines({
      language: 'en',
      pageSize: 20,
    });
    return response.articles;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
}

module.exports = { fetchNews };