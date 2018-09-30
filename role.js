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
  
  
  ///////////////////أكواد/////////////////////
  
  
  client.on('message', message => { 

if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if (command == "roleadd") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
message.guild.members.forEach(m => {
m.addRole(message.guild.roles.find('name', MRole))
})
message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
}
});

client.on('message', message => { 

if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if (command == "roleremove") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let MRole = message.content.split(" ")[1];
if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
message.guild.members.forEach(m => {
m.removeRole(message.guild.roles.find('name', MRole))
})
message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
}
});






client.login(process.env.BOT_TOKEN);

