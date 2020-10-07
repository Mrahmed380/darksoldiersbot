const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
  name: "report",
  category: "utility",
  usage: "?report <Message>",
  description: "simple report command",
   run: async (client, message, args) => {
  if(!args[0]) {
      return message.channel.send("Please type something to report!")
    }

  const channel = await client.channels.fetch("Channel ID here")
    let embed = new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setTitle("NEW REPORT!")
.setDescription(args.slice(0).join(" "))
.setFooter(`Reported by: ${message.author.username}`)

return channel.send(embed)
message.channel.send("Report sent!")
     
  }
};
