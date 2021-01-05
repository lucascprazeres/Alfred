import { Message } from 'discord.js';

export default class CommandHandler {
  public parse(msg: Message): void {
    if (msg.content === 'hello') {
      msg.reply('world');
    }
  }
}
