const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "report",
  category: "utility",
  usage: "?report <Message>",
  description: "❌|Reporte simple",
   run: async (client, message, args) => {
  if(!args[0]) {
      return message.channel.send("Please type something to report!")
    }

  const channel = await client.channels.fetch("Channel ID here")
    let embed = new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setTitle("➕|NUEVO REPORTE|➕")
.setDescription(args.slice(0).join(" "))
.setFooter(`Reportado por: ${message.author.username}`)

return channel.send(embed)
message.channel.send("Report sent!")
     
  }
};
