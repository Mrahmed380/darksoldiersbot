const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["resetwarns"],
  usage: "resetwarns <@user>",
  description: "🚀|Resetea los warns",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌|Debe tener permisos de administrador para usar este comando")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("❌|Menciona un usuario al cual quieras resetear sus warns")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("❌|Los bot no pueden tener advertencias")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("❌|No se le permite restablecer sus WARNS")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} ❌|No tiene ningun warn`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`✅|Todos tus warns son reiniciados por ${message.author.username} desde ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
}
}
