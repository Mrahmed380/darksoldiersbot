const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "embed",
  usage: "embed <message>",
  run : async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("You're not Write The Message Yet!")
    }
    
    let embed = new MessageEmbed()
    .setColor(`RANDOM`)
    .setDescription(args.join(" "))
    .setTimestamp()
    
    message.channel.send(embed)
  }
}
