const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
  console.log (`Logged in as ${client.user.tag} (${client.user.id}) on ${client.guilds.size} servers`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'Code123') {
    if (msg.author.bot) return;
  msg.channel.sendMessage('Beep Beep');

client.user.setStatus('online')
client.user.setGame('MoadTheGamer is een bot??');

  }
});

client.login("MzY2Njk1NTEwNDQ4Mjc1NDU4.DPGZ3A.1vEke4y-f6kqA_aZvZiNYGNYwHo");
