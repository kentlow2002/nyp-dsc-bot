const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', (member) => {
    const channel = member.guild.channels.cache.get("776009068610977792");
    channel.send('new member');
    const publicRole = member.guild.roles.cache.find(role => role.name === "Public");
    member.roles.add(publicRole);
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret