import { Message } from 'discord.js';
import { GiphyFetch } from '@giphy/js-fetch-api';

global.fetch = require('node-fetch');

export default class CommandHandler {
  giphyFetch = new GiphyFetch(process.env.GIPHY_API_TOKEN || '');

  async gif(msg: Message, searchTerm: string): Promise<void> {
    msg.react('👍');

    const { data: gifs } = await this.giphyFetch.search(searchTerm, {
      limit: 1,
    });

    msg.reply(gifs[0].url);
  }
}
