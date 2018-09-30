const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
  client.user.setGame('Sky Shop','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('Pong!');
      }
    });



client.login(process.env.BOT_TOKEN);


