import dotenv from 'dotenv';
import { Client } from 'discord.js';

import EventHandler from './handlers/EventHandler';

dotenv.config();

const client = new Client();
const eventHandler = new EventHandler();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`Loogged in as ${client.user?.tag}`);
});

client.on('message', e => eventHandler.handleMessageEvent(e));
