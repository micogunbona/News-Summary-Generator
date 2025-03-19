async function loadNews() {
    const response = await fetch('/api/news/feed');
    const articles = await response.json();
    const feed = document.getElementById('news-feed');
  
    articles.forEach(article => {
      const div = document.createElement('div');
      div.className = 'article';
      div.innerHTML = `<h2>${article.title}</h2><p>${article.description || ''}</p>`;
      div.onclick = () => getSummary(article.content || article.description);
      feed.appendChild(div);
    });
  }
  
  async function getSummary(articleText) {
    const response = await fetch('/api/news/summarize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ articleText }),
    });
    const { summary } = await response.json();
    alert(summary); // For simplicity; replace with better UI
  }
  
  loadNews();