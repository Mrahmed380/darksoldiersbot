const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "⭕|Silencia a cualquiera que rompa las reglas",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Lo siento, pero no tienes permiso para silenciar a nadie."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("❌|No tengo permiso para manegar roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("❌|Menciona al miembro que quieras mutear")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("❌|Por que te silenciarias? -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("❌|Dime una razon para silenciar a alguien")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("❌|El servidor no cuenta con el rol `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("✅|El usuario ya esta silenciado")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};
