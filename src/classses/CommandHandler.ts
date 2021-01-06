import { GiphyFetch } from '@giphy/js-fetch-api';
import { Commands } from '../interfaces';

export default class CommandHandler {
  giphyFetch = new GiphyFetch(process.env.GIPHY_API_TOKEN || '');

  private commands: Commands = {
    gif: async (args: string[]): Promise<string[]> => {
      const searchTerm = args.join(' ');

      const { data: gifResponse } = await this.giphyFetch.search(searchTerm, {
        limit: 1,
      });

      return [gifResponse[0].url];
    },
  };

  async run(command: string, args: string[]): Promise<string[]> {
    let response = [''];
    try {
      response = await this.commands[command](args);
    } catch (err) {
      if (!(err instanceof TypeError)) {
        console.log(err);
      }
    }

    return response;
  }
}
