
 const Discord = require('discord.js');
    const client = new Discord.Client();
    const prefix = '!'

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
    client.on('ready', function(){
        var ms = 10000 ;
        var setGame = [' Sky Shop '];
        var i = -1;
        var j = 0;
        setInterval(function (){
            if( i == -1 ){
                j = 1;
            }
            if( i == (setGame.length)-1 ){
                j = -1;
            }
            i = i+j;
            client.user.setGame(setGame[i],`https://www.twitch.tv/pythorxxx`);
        }, ms);

    })

client.login(process.env.BOT_TOKEN);
