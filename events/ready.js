
const db = require("quick.db")

module.exports.run = (client) => {
  console.log("JOIN MY SERVER : https://discord.gg/kzU66RJ" )
  client.user.setActivity(db.get(`status`)); 
}
