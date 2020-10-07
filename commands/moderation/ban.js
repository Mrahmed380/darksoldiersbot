const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "💫|Banear a cualquiera de un disparo sin conocer a nadie xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, ❌|No tienes permiso para banear.`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, ❌|No tengo permisos para banear a alguien`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, ❌|Menciona a una persona que quieras banear.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, ❌|No te puedes banear a ti mismo!`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, ❌|Indique la razón para banear el miembro`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Baneado ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Baneado por ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}
