const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!"

bot.on('ready', () => {
  console.log('The bot is Ready!');
});

bot.on('message', message => {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if (command === 'ban') {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('Je bent geen admin.').catch(console.error);
  const member = message.mentions.members.first();
  if (!member) return message.reply('Je moet het zo doen: `!ban @user1234`').catch(console.error);
  let modlog = bot.channels.find('name', 'test');
  if (!modlog) return message.reply('I cannot find a test channel').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the BAN.').catch(console.error);
  member.ban().then (member => {
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Action:', 'Ban')
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Reason', reason);
    return bot.channels.get(modlog.id).sendEmbed(embed), message.channel.sendMessage(`**${user.username}**` + " was succesfuly banned");
  }).catch(console.error);
  }

});

bot.login("MzY2Njk1NTEwNDQ4Mjc1NDU4.DPmgng.u7W7TWUUmpEZOSd2IsDKZ0o0fjY");
