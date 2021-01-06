import { GiphyFetch } from '@giphy/js-fetch-api';
import GifProvider from '../models/GifProvider';

class GiphyProvider implements GifProvider {
  private giphyFetch = new GiphyFetch(process.env.GIPHY_API_TOKEN || '');

  async search(term: string): Promise<string[]> {
    const { data: gifResponse } = await this.giphyFetch.search(term, {
      limit: 1,
    });

    return [gifResponse[0].url];
  }
}

export default GiphyProvider;
