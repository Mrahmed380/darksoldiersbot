const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "advice",
   category: "fun",
  
  description: "Reciba nueva adivinanzas | 👌
run: async (client, message, args) => {
  
    let data = await random.getAdvice()
    message.channel.send(data)
  
}
}
