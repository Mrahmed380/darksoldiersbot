const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "⬜|Envía tu sugerencia",
  category: "main",
  run: (client, message, args) => {

    if(!args.length) {
      return message.channel.send("➰|Por favor da la sugerencia")
    }

    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))


    if(!channel) {
      return message.channel.send("✳|No hay canal con nombre - sugerencias")
    }


    let embed = new MessageEmbed()
    .setAuthor("🔱|SUGERENCIA|🔱: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()


    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })



    message.channel.send("Sended Your Suggestion to " + channel)

  }
}
