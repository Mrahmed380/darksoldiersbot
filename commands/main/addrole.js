const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrole",
  aliases: [],
  category: "main",
  usage: "addrole <mention> <role name (don't mention the role)>",
  description: "🚷|Agrega un rol al miembro mencionado.",
  run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member)
      return message.channel.send('❌|Mencione un usuario o proporcione un ID de usuario válido');
    if (member.roles.highest.position >= message.member.roles.highest.position)
      return message.channel.send('❌|No puede agregar un rol a alguien con un rol igual o superior');

    const role = message.guild.roles.cache.find(val => val.name === args[1])
    
    let reason = args.slice(2).join(' ');
    if (!reason) reason = '`None`';
    if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

    if (!role)
      return message.channel.send('💬|Mencione un rol o proporcione un ID de rol válido');
    else if (member.roles.cache.has(role.id))
      return message.channel.send('🔘|El usuario ya tiene el rol proporcionado');
    else {
      try {

        await member.roles.add(role);
        const embed = new MessageEmbed()
          .setTitle('Add Role')
          .setDescription(`${role} fue agregado exitosamente a ${member}.`)
          .addField('Moderator', message.member, true)
          .addField('Member', member, true)
          .addField('Role', role, true)
          .addField('Reason', reason)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);


      } catch (err) {
        return message.channel.send('Please check the role hierarchy');
      }
    }  
  }
};
