 const Discord = require('discord.js');
    const client = new Discord.Client();
    const prefix = '+'

    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('Pong!');
      }
    });
    client.on('ready', () => {
      console.log('╔[══════════════════════════════════]╗');
      console.log('')
      console.log('            ╔[════════════]╗')
      console.log('              Bot Is Online')
      console.log('            ╚[════════════]╝')
      console.log('')
      console.log(`Logged in as ${client.user.tag}!`);
      console.log('')
      console.log(`servers! [ " ${client.guilds.size} " ]`);
      console.log('')
      console.log(`Users! [ " ${client.users.size} " ]`);
      console.log('')
      console.log('╚[════════════════════════════════════]╝')
    });
const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(` sky shope.`,'https://www.twitch.tv/v5bz');
 }, ms);

    })









client.login(process.env.BOT_TKEN);

