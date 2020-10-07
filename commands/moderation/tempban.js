const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tempban',
    category: "moderation",
    description: "Will temporarily ban the specified person.",
    usage: ">tempban <user> <days> [reason]",
    aliases: ["tban"],
    run: async (Discord, bot, message, args) => {
        //if (!message.guild.me.hasPermission("BAN_MEMBERS")) return;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Error! You do not have the permissions to ban members.");
        if (!args[0]) return message.reply("Error! You need to specify a person.");
        let target = message.mentions.members.first() || message.guild.member(args[0]);
        if (!target) return message.reply("Error! You need to specify a valid person.");
        if (target.hasPermission("ADMINISTRATOR")) return message.reply("Error! You can not use this command to ban an administrator.");
        let banduration = Number(args[1]);
        if (!banduration) return message.reply("Error! Please specify for how many days you want to ban this user")
        let banreason = await args.slice(1).join(" ")
        if (!banreason) banreason = "Not Provided"
        try {
            if (!target.bannable) return message.throwError();
            await target.send(`You were banned in ${message.guild.name} for ${banduration} days. reason: ${banreason}`);
            await target.ban({ reason: banreason, days: banduration });
            let embed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<a:yes:744851480007147571> ${target.toString()} has been banned for ${banduration} days. Reason: ${banreason}.`)
            message.channel.send(embed);
        } catch (err) {
            let falseembed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`<:no:746266493515464704> Something went wrong when I tried to temporarily ban ${target.toString()}. Please make sure I have the permissions to ban members in this server.`)
            message.channel.send(falseembed);
        }
    }
}
