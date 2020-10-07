const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "🆗|Kickea a cualquiera con un solo disparo xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, ❌|No tienes permiso suficiente para usar este comando`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, ❌|No tengo permiso suficiente para ejecutar este comando`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, ❌|Por favor mencione a la persona a la que quiere kickear`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, ❌|No te puedes kickear a ti mismo`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, ❌|Dime una razon para kickear`)
  }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Kickeado por ${message.author.username}`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}
