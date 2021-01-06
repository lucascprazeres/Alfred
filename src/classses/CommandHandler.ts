import { inject } from 'tsyringe';
import { Commands } from './interfaces';
import GifProvider from '../providers/GifProvider/models/GifProvider';
import NewsProvider from '../providers/NewsProvider/models/NewsProvider';

export default class CommandHandler {
  constructor(
    @inject('GifProvider')
    private gifProvider: GifProvider,
    @inject('NewsProvider')
    private newsProvider: NewsProvider,
  ) {}

  private commands: Commands = {
    gif: async (args: string[]): Promise<string[]> => {
      const searchTerm = args.join(' ');

      const gifs = await this.gifProvider.search(searchTerm);

      return gifs;
    },
    news: async (args: string[]): Promise<string[]> => {
      let searchTerms;
      let country;

      if (args[0].includes('--')) {
        country = args[0].replace('--', '');
        searchTerms = args.splice(1, args.length - 1);
      } else {
        searchTerms = [...args];
      }

      let headlinesAndLinks: string[] = [];
      try {
        headlinesAndLinks = await this.newsProvider.search(
          searchTerms.join(' '),
          country,
        );
      } catch (err) {
        console.log(err);
      }

      return headlinesAndLinks;
    },
  };

  async run(command: string, args: string[]): Promise<string[]> {
    let response: string[] = [];
    try {
      response = await this.commands[command](args);
    } catch (err) {
      console.log(err);
    }

    return response;
  }
}
