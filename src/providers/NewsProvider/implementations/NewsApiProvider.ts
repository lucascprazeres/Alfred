import NewsAPI from 'ts-newsapi';
import { ApiNewsCountry } from 'ts-newsapi/lib/types';
import NewsProvider from '../models/NewsProvider';

class NewsApiProvider implements NewsProvider {
  newsApiClient = new NewsAPI(process.env.NEWS_API_TOKEN || '');

  async search(term: string, country = 'br'): Promise<string[]> {
    const parsedCountry = country as ApiNewsCountry;

    const result = await this.newsApiClient.getTopHeadlines({
      q: term,
      country: parsedCountry,
      pageSize: 5,
    });

    const headlinesAndLiks = result.articles.map(news => {
      return `${news.url}`;
    });

    return headlinesAndLiks;
  }
}

export default NewsApiProvider;
