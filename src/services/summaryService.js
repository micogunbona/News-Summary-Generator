const OpenAI = require('openai');
const config = require('../config/config');

// Initialize the OpenAI client directly with the API key
const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

async function summarizeArticle(articleText) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: `Summarize this article in 2-3 sentences: ${articleText}` },
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content;
  } catch (error) {
    throw new Error('Failed to summarize article');
  }
}

module.exports = { summarizeArticle };