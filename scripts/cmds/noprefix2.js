const fs = require('fs');//please add music or video and move that all file inside scripts/cmdsnonprefix and replace that music name in the code or vdo if you want toset vdo just replace .mp3 with .mp4

module.exports = {
  config: {
    name: "noprefix2",
    version: "1.0",
    author: "RB-BADOL-KHAN",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix2",
    longDescription: "no prefix2",
    category: "no prefix",
  },

  onStart: async function() {},

  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "/inbox":
          message.reply({
            body: "‎┌─────── •✧ • ──────┐\n \n🫡ষ্যার আপনার ইনবক্সে 💬\nগালি দিসি চেক দিয়েন 😼\n\n‎└─────── •✧ • ──────┘",
            attachment: fs.createReadStream("scripts/cmds/RANA/RB-BOT.png"),
          });
          await api.setMessageReaction("🌃", event.messageID, event.threadID, api);
        break;
case "goodmorning":
          message.reply({
            body: "‎┌─────── •✧ • ──────┐\n        Goodmorning Everyone!\n                 Have A Nice Day 🌇\n‎└─────── •✧ • ──────┘",
            attachment: fs.createReadStream("scripts/cmds/RANA/goodmorning.gif"),
          });
          await api.setMessageReaction("🌇", event.messageID, event.threadID, api);
   case "@পম পম বিলাই":
          message.reply({
            body: "∘₊✧─────────────────✧₊∘\n\n🔴•আমাকে না আমার বস কে মেনশন দেন•🔴",
            attachment: fs.createReadStream("scripts/cmds/RANA/badol-boss.mp3"),
          });
          await api.setMessageReaction("🌸", event.messageID, event.threadID, api);
case "rules":
          message.reply({
            body: "❤️আসসালামু আলাইকুম ❤️\n\n🟢গ্রুপ এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে না তারা জেনে রাখেন🟢\n\n⚪‎──────────────────⚪\n\n🟡১) কোন প্রকার বাজে কথা বলা যাবে না।\n🟡২) ইসলাম এর বিরুদ্ধে কোনো কথা বলা যাবে নাহ।\n🟡৩) কোন পর্ণ স্ক্রিনশট কিংবা লিংক দেওয়া  যাবে না।\n🟡৪) এখানে সবাই প্রিয় ভাই বন তো এখানে খারাপ কথা থেকে বিরত থাকেন।\n🟡৫)আপনি রোবটের ব্যবহার করা না জানলে help চান আডমিন এর থেকে তাও বাজে কমান্ড কইরেন নাহ।\n🟡৬) spam করা যাবে না।\n🟡৭) বট নিয়ে কোন প্রকার ফালতু টেক্সট করা যাবে না.. আর /help ফাইলে এ যেই গুলা  আসে এইগুলা শুধু ব্যাবাহর করবেন।\n🟡৮)এই গ্রুপে কোন বট এড করা যাবে না।\n🟡৯)  গ্রুপে আড্ডা দেওয়া যাবে এখানে সবাই ভাই ব্রাদার হয়ে থাকবেন।\n🟡১০) এই বট অন্য কোন গ্রুপে এড করতে চাইলে অবশ্যই এডমিনের পারমিশন নিতে হবে।\n🟡১১)আর  গ্রুপে কোন কিছু ইনফরমেশন পরিবর্তন করা যাবে না ..without permission🟡\n\n⚪‎──────────────────⚪\n\n🟥•—»যারা এই রুলস  গুলা মেনে চলতে পারবেন তারা group এ থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে 🌸༅༎•─🟥\n\n⚪‎──────────────────⚪\n\n🟥•—»যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন🌸༅༎•─🟥\n\n🟥এডমিন এর ফেসবুক আইডি কোনো হেল্প লাগলে নক দিতে পারেন🟥\n\nhttps://www.facebook.com/XAICO.RANA\n\nm.me/100063487970328\n\n𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: (𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐑𝐀𝐍𝐀)\n\n⚪‎──────────────────⚪",
            attachment: fs.createReadStream("scripts/cmds/RANA/VZUE.gif"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
  case "owner":
message.reply({
body: "‎┏━━━━━━━━━━━━━━━━━━━━┓\n┃         🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      \n┣━━━━━━━━━━━━━━━━━━━━┫\n┃ 👤 𝐍𝐚𝐦𝐞      : 𝐌𝐨𝐡𝐚𝐦𝐦𝐚𝐝 𝐑𝐚𝐧𝐚\n┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞\n┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐈𝐧 𝐂𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝\n┃ 🎂 𝐀𝐠𝐞       : 𝟏𝟖+\n┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦\n┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭\n┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐑𝐚𝐧𝐠𝐩𝐮𝐫 \n┣━━━━━━━━━━━━━━━━━━━━┓\n┃           📨 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 📨\n┣━━━━━━━━━━━━━━━━━━━━┫\n┃ 📢 𝐓𝐠 : t.me/XAICO_RANA\n┃ 🌐 𝐌𝐬𝐠 : m.me/XAICO.RANA\n┣━━━━━━━━━━━━━━━━━━━━┫\n┃ 🕒 𝐓𝐢𝐦𝐞: ${formattedTime}\n┗━━━━━━━━━━━━━━━━━━━━┛",
            attachment: fs.createReadStream("scripts/cmds/RANA/owner.png"),
          });
          await api.setMessageReaction("🤟", event.messageID, event.threadID, api);
   default:
          return;
      }
    }
  }
};
