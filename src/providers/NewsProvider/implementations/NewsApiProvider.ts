import NewsAPI from 'ts-newsapi';
import NewsProvider from '../models/NewsProvider';

class NewsApiProvider implements NewsProvider {
  newsApiClient = new NewsAPI(process.env.NEWS_API_TOKEN || '');

  async search(term: string): Promise<string[]> {
    const result = await this.newsApiClient.getTopHeadlines({
      q: term,
      country: 'br',
      pageSize: 20,
    });

    console.log(result);

    const headlinesAndLiks = result.articles.map(news => {
      return `${news.url}`;
    });

    return headlinesAndLiks;
  }
}

export default NewsApiProvider;
