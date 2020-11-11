const Discord = require('discord.js');
const client = new Discord.Client();
 

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', (member) => {
    console.log('Here!');
    const guild = member.guild;
    const channel = guild.channels.find(channel => channel.name === "entry-logs");
    channel.cache.send("Hello!");
});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret