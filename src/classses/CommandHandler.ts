import { inject } from 'tsyringe';
import { Commands } from '../interfaces';
import GifProvider from '../providers/GifProvider/models/GifProvider';

export default class CommandHandler {
  constructor(
    @inject('GifProvider')
    private gifProvider: GifProvider,
  ) {}

  private commands: Commands = {
    gif: async (args: string[]): Promise<string[]> => {
      const searchTerm = args.join(' ');

      const gifs = await this.gifProvider.search(searchTerm);

      return gifs;
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
