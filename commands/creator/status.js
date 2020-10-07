const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "status",
  description: "✋|Cambiar el estado del bot",
  usage: "status <here>",
  category: "owner",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === "452921092961468417") {
      return message.channel.send("✅ |Este comando solo puede ser utilizado por el creador")
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
   await message.channel.send("Updated the bot status")
    process.exit(1);
    
  }
}
