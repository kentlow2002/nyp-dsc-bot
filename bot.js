const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.get("776009068610977792");
    channel.send("Welcome <@"+member.id+"> ! Enjoy your stay.");
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret