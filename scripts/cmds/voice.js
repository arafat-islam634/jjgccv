const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "voice",
    aliases: ["aniaudio"],
    author: "Kshitiz",
    version: "1.0",
    cooldowns: 5,
    role: 0,
    shortDescription: "Get anime voice",
    longDescription: "Get anime voice based on animeName",
    category: "anime",
    guide: "{p}anivoice animeName",
  },

  onStart: async function ({ api, event, args, message }) {
    api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
    const categories = ["jjk", "naruto", "ds", "aot", "bleach", "onepiece"];

    if (args.length !== 1 || !categories.includes(args[0].toLowerCase())) {
      return message.reply(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚂𝚙𝚎𝚌𝚒𝚏𝚢 𝙰 𝚅𝚊𝚕𝚒𝚍 𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚢. 𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚒𝚎𝚜: ${categories.join(", ")}`);
    }

    try {
      const category = args[0].toLowerCase();
      const response = await axios.get(`https://anivoice-bjfl.onrender.com/kshitiz/${category}`, { responseType: "arraybuffer" });

      const tempVoicePath = path.join(__dirname, "cache", `${Date.now()}.mp3`);
      fs.writeFileSync(tempVoicePath, Buffer.from(response.data, 'binary'));

      const stream = fs.createReadStream(tempVoicePath);
      message.reply({ attachment: stream });

      api.setMessageReaction("☑️", event.messageID, (err) => {}, true);
    } catch (error) {
      console.error(error);
      message.reply("Sorry, an error occurred while processing your request.");
    }
  }
};
