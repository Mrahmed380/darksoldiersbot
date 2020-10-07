const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warnea a cualquiera que rompa las reglas",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌|Tu no tienes permisos para warnear!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("❌|Menciona a la persona que quieras warnear - warn @mention <reaosn>")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("❌|Tu no puedes warnear bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("❌|No te puedes warnear a ti mismo")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("❌|Estas de broma, quieres warnear al owner? -_-")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("❌|Dime una razon para warnear - warn @mention <reason>")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 5) {
      return message.channel.send(`${message.mentions.users.first().username} ❌|Ya alcanzo el limite de 5 warns`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`❌|Tu has sido warneado en **${message.guild.name}** por ${reason}`)
      await message.channel.send(`❌|Warneado **${message.mentions.users.first().username}** por ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`❌|Warneado **${message.mentions.users.first().username}** por ${reason}`)
    }
    
  
  } 
}
