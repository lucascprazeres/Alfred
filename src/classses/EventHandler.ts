import { Message } from 'discord.js';
import { container } from 'tsyringe';
import CommandHandler from './CommandHandler';
import globalOptions from '../globals';

export default class EventHandler {
  private commandHandler = new CommandHandler(
    container.resolve('GifProvider'),
    container.resolve('NewsProvider'),
  );

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

      if (response.length !== 0) {
        msg.react('👍');
        msg.channel.send(response);
      } else {
        msg.react('🤔');
        msg.reply('Não encontrei o que você pediu. Tente novamente.');
      }
    }
  }
}
