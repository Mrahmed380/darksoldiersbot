const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tempban',
    category: "moderation",
    description: "Banea temporalmente a una persona.",
    usage: "tempban <user> <days> [reason]",
    aliases: ["tban"],
    run: async (Discord, bot, message, args) => {
        //if (!message.guild.me.hasPermission("BAN_MEMBERS")) return;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("❌|No tienes permiso para banear.");
        if (!args[0]) return message.reply("❌|Necesitas banear a alguien especifico.");
        let target = message.mentions.members.first() || message.guild.member(args[0]);
        if (!target) return message.reply("❌|Necesitas banear a alguien especifico valido.");
        if (target.hasPermission("ADMINISTRATOR")) return message.reply("❌|Tu no puedes utilizar este comando.");
        let banduration = Number(args[1]);
        if (!banduration) return message.reply("❌|Selecciona los dias que quieras banear al usuario")
        let banreason = await args.slice(1).join(" ")
        if (!banreason) banreason = "Not Provided"
        try {
            if (!target.bannable) return message.throwError();
            await target.send(`✅|Tu has sido baneado temporalmente ${message.guild.name} por ${banduration} days. reason: ${banreason}`);
            await target.ban({ reason: banreason, days: banduration });
            let embed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:yes:744851480007147571> ${target.toString()} fue baneado temporalmente ${banduration} days. Reason: ${banreason}.`)
            message.channel.send(embed);
        } catch (err) {
            let falseembed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<:no:746266493515464704> ❌|Algo salio mal ${target.toString()}. Asegurate que tengo permisos de BAN MEMBERS.`)
            message.channel.send(falseembed);
        }
    }
}
