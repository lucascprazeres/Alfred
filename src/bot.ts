import dotenv from 'dotenv';
import { Client } from 'discord.js';

import CommandHandler from './CommandHandler';

dotenv.config();

const client = new Client();
const commandHandler = new CommandHandler();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`Loogged in as ${client.user?.tag}`);
});

client.on('message', msg => commandHandler.parse(msg));
