const Discord = require("discord.js");

module.exports = {
  name: "announce",
  category: "main",
  usage: "announce <#channel> <message>",
  description: "anunciar un mensaje en el canal especificado",
  run: (client, message, args) => {
    let channel = message.mentions.channels.first();

    if (!channel) {
      return message.channel.send("Please Mention the channel first");
    }
  if(!args.slice[1]) {
      return message.channel.send("Please put the message you want to Announce ;-;")
    }
    
    let embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle("🔮|ANUNCIO|🔮")
      .setDescription(args.slice(1).join(" "))
      .setTimestamp();
    message.channel.send("Message Sended");

    channel.send(embed);
  }
};
