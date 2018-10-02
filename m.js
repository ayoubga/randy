const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('Sky Shop','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
const prefix = '-'

client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('bc')) {
if(!message.channel.guild) return message.channel.send('**ظ‡ط°ط§ ط§ظ„ط£ظ…ط± ظپظ‚ط· ظ„ظ„ط³ظٹط±ظپط±ط§طھ**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ظ„ظ„ط£ط³ظپ ظ„ط§ طھظ…طھظ„ظƒ طµظ„ط§ط­ظٹط©** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "QueenBot.";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**ظٹط¬ط¨ ط¹ظ„ظٹظƒ ظƒطھط§ط¨ط© ظƒظ„ظ…ط© ط§ظˆ ط¬ظ…ظ„ط© ظ„ط¥ط±ط³ط§ظ„ ط§ظ„ط¨ط±ظˆط¯ظƒط§ط³طھ**');message.channel.send(`**ظ‡ظ„ ط£ظ†طھ ظ…طھط£ظƒط¯ ظ…ظ† ط¥ط±ط³ط§ظ„ظƒ ط§ظ„ط¨ط±ظˆط¯ظƒط§ط³طھطں \nظ…ط­طھظˆظ‰ ط§ظ„ط¨ط±ظˆط¯ظƒط§ط³طھ:** \` ${args}\``).then(msg => {
msg.react('âœ…')
.then(() => msg.react('â‌Œ'))
.then(() =>msg.react('âœ…'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === 'âœ…' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'â‌Œ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`âک‘ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}

});


client.login(process.env.BOT_TOKEN);
