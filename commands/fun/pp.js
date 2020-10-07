const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pp",
  aliases: [],
  category: "Fun",
  usage: "pp <user>",
  description: "Te muestro cuánto mide tu pito xD",
  run: async (client, message, args) => {
    var facts = [
      "",
      "=",
      "==",
      "===",
      "====",
      "=====",
      "======",
      "=======",
      "========",
      "=========",
      "==========",
      "===========",
      "============",
      "=============",
      "==============" //little pyramid tho
    ];
    var fact = Math.floor(Math.random() * facts.length);
    let ppuser = message.mentions.users.first() || message.member.user;
    const embed = new MessageEmbed().setTitle("Penis Generator")
      .setDescription(`${ppuser.username} penis 
8${facts[fact]}D`);

    message.channel.send(embed);
  }
};
