const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("cryptobot page")
})

app.listen(3000, () => {
  console.log("Project is ready!")
})

let Discord = require("discord.js")
let client = new Discord.Client()
let embed = new Discord.MessageEmbed()
let id = 0

var list = [
    { name: 'Bitcoin', price: '56,258.80', percent: '+2.20', color: "GREEN"},
    { name: 'Ethereum', price: '1,721.20', percent: '-3.92', color: "RED" },
    { name: 'Binance Coin', price: '277.14', percent: '+4.61', color: "GREEN"},
    { name: 'Tether', price: '1.00', percent: '-0.00', color: "RED" },
    { name: 'Cardano', price: '1.20', percent: '-1.33', color: "RED" }
];

client.on("message", message => {
  if(message.content === "!nathan"){
    message.channel.send("sux")
  }
  
  if(message.content === "!test"){
    message.channel.send("working")
  }
  
  if(message.content === "!aram"){
    message.channel.send("LET'S GOOOOOOOOO")
    message.react('❤️')
  }
  
  if(message.content === "!help"){
    message.channel.send("Commands: \n !top - Shows a list of current top cryptocurrencies \n !crypto - Shows a random cryptocurrency \n !price - Shows price of named currency")
  }
  
  if(message.content === "!crypto"){
    let random = Math.floor(Math.random() * Math.floor(5))
    embed
    .setTitle(list[random].name)
    .setDescription("Price: $"+ list[random].price +" USD")
    .setColor(list[random].color)
    .setFooter("Changed" + list[random].percent +"% in last 24 hours")
    message.channel.send(embed)
  }
  
  if(message.content === "!top"){
    embed
    .setTitle(list[id].name)
    .setDescription("Price: $"+ list[id].price +" USD")
    .setColor(list[id].color)
    .setFooter("Changed" + list[id].percent +"% in last 24 hours")
    //React to message
    message.channel.send(embed)
      .then(sentEmbed => {
        sentEmbed.react('⬅️')
        sentEmbed.react('➡️')
    })
  } 
  
  if(message.content === "!price"){
    //START
    message.channel.send("Type the name of the currency")
    message.channel.awaitMessages(m => m.author.id == message.author.id,{max: 1, time: 30000})
      .then(collected => {
        switch(collected.first().content.toLowerCase()){
          case "bitcoin":
            message.channel.send("$56,258.80 USD")
            break;
          case "ethereum":
            message.channel.send("$1,721.20 USD")
            break;
          case "binance coin":
            message.channel.send("$277.14 USD")
            break;
          case "tether":
            message.channel.send("$1.00 USD")
            break;
          case "cardano":
            message.channel.send("$1.20 USD")
            break;
          default:
            message.channel.send( collected.first().content + " is not valid. Operation cancelled")
        }
    }).catch(() => {
        message.reply('No answer after 30 seconds. Operation cancelled.');
    });
    
    //END
  }
})

client.on('messageReactionAdd', (reaction, user) => {
    let message = reaction.message, emoji = reaction.emoji;
    if(user.id != 825592197977866261){
        if (emoji.name === '⬅️') {
		        if( id === 0){
               id = 4
           } else {
               id--;
           }
	 	    } else if (emoji.name === '➡️'){
			     if( id === 4){
             id = 0
           } else {
             id++;
           }
		    } 
  
        embed
        .setTitle(list[id].name)
        .setDescription("Price: $"+ list[id].price +" USD")
        .setColor(list[id].color)
        .setFooter("Changed" + list[id].percent +"% in last 24 hours")
        message.edit(embed)
  
        // Remove the user's reaction
        reaction.users.remove(user);
    }  
        
});

client.login("ODI1NTkyMTk3OTc3ODY2MjYx.YGAKpg.L3oX0_h1Jv480XgvPf0uUMS1QRE")