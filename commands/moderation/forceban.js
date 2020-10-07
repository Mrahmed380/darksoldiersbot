module.exports = {
  name: "forceban",
  usage: "forceban [id]",
  aliases: ["fb"],
  description: "Banear a cualquier persona por identificación, puede banearlo si no está en el servidor por su identificación",
  category: "moderation",
  run: (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌|No tienes permisos para banear miembros. Comuníquese con un miembro del personal");
   }
    if (!args[0]) return message.channel.send( {embed: { "description": "❌|Dime la id", "color": 0xff2050 } });
    let dead = args[0];
    message.guild.ban(dead).then(() => {
        message.channel.send({embed: { "description": `\`${args[0]}\` ✅|Se a utilizado forceban con exito`, color: 0xff2050 } })
    
    }).catch(err => {
        message.channel.send( { embed:{ "description": "The ID `"+message.args[0]+"` ❌|No es un usuario valido.", "color": 0xff2050 } });
    })
}
}
