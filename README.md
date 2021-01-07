<div align=center><img width="150" src=".github/logo.png"/></div>

<h1 align=center>Alfred</h1>
<h3 align=center>Your personal butler on discord.</h3>


<div align=center>
<img src="https://img.shields.io/badge/nodejs-v15.30-green"/>
<img src="https://img.shields.io/badge/typescript-v4.1.3-informational"/>
<img src="https://img.shields.io/badge/discord.js-v12.5.1-blueviolet"/>
</div>

## About
This is a fun purpose project made using **nodejs** with **TypeScript**. It uses the **Discord.js** library to connect with the discord api and interprete the given commands. Also, it consumes two external services to provide gif and news fetching!

## Technologies
- [Nodejs](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Discord.js](https://discord.js.org/)
- [@giphy/js-fetch-api](https://www.npmjs.com/package/@giphy/js-fetch-api)
- [ts-newsapi](https://preview.npmjs.com/package/ts-newsapi)
- [Tsyringe](https://www.npmjs.com/package/tsyringe)

## Implemented patterns and principles
- Dependency Injection
- S and D from SOLID

## Commands
Currently, the bot only responds to these commands:

**$gif** *searchTerm* - which, of course, sends the fetched gif to the current channel

**$news** [--country] *searchTerm* - which fetches and retrives some links (max to 5) to headlines on news platforms

*ps: the argumet **--country** should be replaced for a to etter representation of a country, such as **us**, **br**, **uk** and so forth. Besides, since it is optional, the default value is br, which fetch news on brazillian vehicles.*

## Project requirements

Connecting with external services is awesome, but it has it's trade-offs. If you check the .env.example file, you should find the necessary tokens to connect to those platforms. Make sure to get all of the listed keys and to create a .env file on the root dir to  have access to the command functionalities.

- DISCORDJS_BOT_TOKEN https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js-pt

  *follow the configuration steps until you have a new bot on your server and its key*
- GIPHY_API TOKEN https://giphy.com/
- NEWS_API_TOKEN https://newsapi.org/

*Another quick note: this project uses dependency injenction to make it more flexible, so feel free to add your own providers*

Besides, this project uses [yarn]() as the dependency manager, so don't forget to install it.

## HOWTO

To clone this project to your machine and download it's dependencies, you just have to run

```bash
git clone https://github.com/lucascprazeres/alfred

cd Alfred

yarn
```

Once you have done this and configured the environment variables as shown above, you're ready to go!

### Run the project

```bash
# As a user
yarn tsc #builds the typescript code into regular js
yarn start

#OR, as a dev
yarn dev # initialize the dev server
```

The bot should then begin to react to your $ prefixed commands.

### Contribute

Create your own branch on the project with

```bash
git checkout -b your-branch
```

Make your changes and send back to this repository

```bash
git add .
git commit -m 'tell me what have you done'
git push origin my-branch
```

Go back to the github repository page and create your pull request. I'll check it as soon as possible.

## License
This project is under the MIT License. Consult the LICENSE file for further information.


## Thanks!
If you liked the idea or it's implementation, don't forget to 🌟 this repository :)

---

<div align="center"> Made with ❤️ by <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas Prazeres</a> </div>
