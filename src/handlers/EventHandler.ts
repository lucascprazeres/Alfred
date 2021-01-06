import { Message } from 'discord.js';
import CommandHandler from './CommandHandler';

export default class EventHandler {
  commandHandler = new CommandHandler();

  async handleMessageEvent(msg: Message): Promise<void> {
    const prefix = msg.content[0];

    if (prefix === '$') {
      const [command, ...values] = msg.content.split(' ');

      if (command === '$gif') {
        this.commandHandler.gif(msg, values.join(' '));
      }
    }
  }
}
