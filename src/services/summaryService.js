const OpenAI = require("openai");
const config = require("../config/config");

// Initialize the OpenAI client directly with the API key
const openai = new OpenAI({
  apiKey: config.openaiApiKey,
});

async function summarizeArticle(articleText) {
  try {
    if (typeof articleText !== "string" || !articleText.trim()) {
      throw new Error("Article text must be a non-empty string");
    }
    console.log("API Key:", config.openaiApiKey ? "Present" : "Missing");
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Test with this first
      messages: [
        {
          role: "user",
          content: `Summarize this article in 2-3 sentences: ${articleText}`,
        },
      ],
      max_tokens: 150,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error.message, error.stack);
    throw new Error(`Failed to summarize article: ${error.message}`);
  }
}
module.exports = { summarizeArticle };
