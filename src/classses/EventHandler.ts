import { Message } from 'discord.js';
import { container } from 'tsyringe';
import CommandHandler from './CommandHandler';
import globalOptions from '../globals';

export default class EventHandler {
  private commandHandler = new CommandHandler(container.resolve('GifProvider'));

  async handleMessageEvent(msg: Message): Promise<void> {
    if (msg.content[0] === globalOptions.commandPrefix) {
      const [command, ...args] = msg.content.split(' ');
      const commandWithoutPrefix = command.replace(
        globalOptions.commandPrefix,
        '',
      );

      const response = await this.commandHandler.run(
        commandWithoutPrefix,
        args,
      );

      if (response[0] !== '') {
        msg.react('👍');
        msg.reply(response);
      } else {
        msg.react('🤔');
      }
    }
  }
}
