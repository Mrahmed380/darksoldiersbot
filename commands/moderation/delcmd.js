const db = require("quick.db")

module.exports = {
  name: "delcmd",
  usage: "delcmd <cmd_name>",
  description: "❌|Borrar un comando perzonalisado",
  category: "moderation",
  run: (client, message, args) => {

    let cmdname = args[0]

    if(!cmdname) return message.channel.send(":x: Gimm me commmand name, `delcmd <cmd_name>`")

    let database = db.get(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send(":x: No encuentro este comando.")

      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      return message.channel.send(`Borrado el **${cmdname}** Command!`)


    } else {
      return message.channel.send(":x: Sorry pero no estoy habilitado para borrar!")
    


  }
  }
}
 
