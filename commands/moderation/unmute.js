module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "❌|No tienes permisos para des silenciar a alguien"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("❌|No tengo permisos.");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "❌|Menciona al miembro que quieras des silenciar"
      );
    }
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user.roles.cache.has(muterole)) {
      return message.channel.send("❌|El usuario dado no tiene un rol mute, así que lo que se supone que debo hacer?")
    }
    
    
    user.roles.remove(muterole)
    
    await message.channel.send(`**${message.mentions.users.first().username}** ✅| Ha sido des silenciado`)
    
    user.send(`Ahora está des silenciado de **${message.guild.name}**`)

  }
};
