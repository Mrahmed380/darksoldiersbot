const Discord = require("discord.js");
const {
    MessageEmbed
} = require("discord.js");


module.exports = {
    name: "fight",
    category: "fun",
    aliases: ["battle"],

    description: "👊|Para pelear con alguien",
    usage: "battle @user",
    accessableby: "everyone",
    run: async (client, message, args) => {
        let member = message.mentions.members.first();

        if (!member)
            return message.channel.send(`You need to mention someone`)

        if (member.id === message.author.id)
            return message.channel.send(`You cant fight yourself`)


        var players = [message.author.username, member.user.tag];
        var player = Math.floor(Math.random() * players.length);
        var guns = ["M4", "m24", "Akm,", "Awm", "Groza"];

        var gun = Math.floor(Math.random() * guns.length);
        var shots = ["headshot", "Bodyshot"];
        var shot = Math.floor(Math.random() * shots.length);

        if (!member) return message.channel.send("you need to mention someone")
        let embed = new MessageEmbed()
            .setTitle('👋|Aquí están los resultados')
            .setDescription(`${players[player]} ha matado a su oponente con ${guns[gun]} por ${shots[shot]}`)
            .setColor("RANDOM")
        return message.channel.send(embed)
    }
};
