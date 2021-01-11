import { Message } from 'discord.js';

export interface ICommands {
  [command: string]: (args: string[]) => Promise<string[]>;
}

export interface ICommandHandler {
  run: (command: string, args: string[]) => Promise<string[]>;
}

export interface IEventHandler {
  handleMessageEvent: (msg: Message) => Promise<void>;
}
