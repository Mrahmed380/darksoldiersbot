const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "setprefix",
  category: "moderation",
  usage: "setprefix <new-prefix>",
  description: "Cambia el prefix del bot",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌|No tienes permiso para cambiar el preifx")
    }
    
    if(!args[0]) {
      return message.channel.send("❌|Dime el nombre que quieras cambiar en el prefix")
    } 
    
    if(args[1]) {
      return message.channel.send("❌|No se puede establecer como prefix un argumento doble")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("❌|No se puede enviar prefijo de más de 3 caracteres")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("✅|Prefix reseteado")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`✅|Prefix puesto con exito ${args[0]}`)
    
  }
}
