const moment = require('moment-timezone');
 
module.exports.config = {
  name: "ajan",
  version: "2.0.0",
  role: 0,
  author: "SIDDIK",
  description: "AutoTime for prayer notifications",
  category: "AutoTime",
  countDown: 3
};
 
module.exports.onLoad = async ({ api }) => {
  const arrayData = {
    "05:04:00 AM": {
      message: `
╭━━━━━━━━━━━━━━━━╮
┃🌙✨ ফজরের আজান ✨🌙┃
╰━━━━━━━━━━━━━━━━╯
 
📿 আসসালামু আলাইকুম!🖤💫
প্রিয় মুসলিম ভাই ও বোনেরা, 
এখন ফজরের আজান দেওয়া হয়েছে। 
নামাজের জন্য প্রস্তুতি নিন।
ফজরের নামাজ কিছু সময়ের মধ্যেই শুরু হবে।✨🧡
━━━━━━━━━━━━━━━━━━
𝚃𝚑𝚎 𝙲𝚊𝚕𝚕 𝚃𝚘 𝙿𝚛𝚊𝚢𝚎𝚛 𝚆𝚊𝚜 𝙶𝚒𝚟𝚎𝚗
`
    },
    "12:59:00 PM": {
      message: `
╭━━━━━━━━━━━━━━━━━╮
┃🌙✨ জোহরের আজান ✨🌙┃
╰━━━━━━━━━━━━━━━━━╯
 
📿 আসসালামু আলাইকুম!🖤💫
প্রিয় মুসলিম ভাই ও বোনেরা, 
এখন জোহরের আজান দেওয়া হয়েছে। 
নামাজের জন্য প্রস্তুতি নিন।
জোহরের নামাজ কিছু সময়ের মধ্যেই শুরু হবে।✨🧡
━━━━━━━━━━━━━━━━━━
𝚃𝚑𝚎 𝙲𝚊𝚕𝚕 𝚃𝚘 𝙿𝚛𝚊𝚢𝚎𝚛 𝚆𝚊𝚜 𝙶𝚒𝚟𝚎𝚗
`
    },
    "03:44:00 PM": {
      message: `
╭━━━━━━━━━━━━━━━━╮
┃ 🌙✨ আসর আজান ✨🌙 ┃
╰━━━━━━━━━━━━━━━━╯
 
📿 আসসালামু আলাইকুম!🖤💫
প্রিয় মুসলিম ভাই ও বোনেরা, 
এখন আসর আজান দেওয়া হয়েছে। 
নামাজের জন্য প্রস্তুতি নিন।
আসরের নামাজ কিছু সময়ের মধ্যেই শুরু হবে।✨🧡
━━━━━━━━━━━━━━━━━━━
𝚃𝚑𝚎 𝙲𝚊𝚕𝚕 𝚃𝚘 𝙿𝚛𝚊𝚢𝚎𝚛 𝚆𝚊𝚜 𝙶𝚒𝚟𝚎𝚗
`
    },
    "06:03:00 PM": {
      message: `
  ‎🌙✨ মাগরিব আজান & ইফতার ✨🌙
‎✨━━━━━━━━━━━━━━━━✨
‎📿 আসসালামু আলাইকুম! 🖤💫
‎
‎প্রিয় মুসলিম ভাই ও বোনেরা,
‎মাগরিব এর আজান এর সময় হয়ে গেছে
‎ ইফতারের প্রস্তুতি নিন।
‎তাড়াতাড়ি খেজুর ও পানি নিয়ে বসে পড়ুন! 🍽️🧡
‎
‎ইফতার শেষে যেন নামাজ আদায় করতে ভুলবেন না! ✨
‎
‎✨━━━━━━━━━━━━━━━━✨
‎🍽️ দোয়া করে ইফতার করুন, 
‎আল্লাহ কবুল করুন! 🤲✨
‎`
    },
    "07:29:00 PM": {
      message: `
🌙✨  ইশা আজান  ✨🌙  
‎✨━━━━━━━━━━━━━━━━✨
📿 আসসালামু আলাইকুম!🖤💫

প্রিয় মুসলিম ভাই ও বোনেরা, 
এখন ইশা এর আজান দেওয়া হয়েছে। 
নামাজের জন্য প্রস্তুতি নিন।
ইশা নামাজ কিছু সময়ের মধ্যেই শুরু হবে।✨🧡

‎✨━━━━━━━━━━━━━━━━✨
𝚃𝚑𝚎 𝙲𝚊𝚕𝚕 𝚃𝚘 𝙿𝚛𝚊𝚢𝚎𝚛 𝚆𝚊𝚜 𝙶𝚒𝚟𝚎𝚗
`
    }
  };
 
  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Dhaka');
    const currentTime = now.format('hh:mm:ss A');
 
    const messageData = arrayData[currentTime];
 
    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID) => {
        api.sendMessage({ body: messageData.message }, threadID);
      });
    }
 
    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };
 
  checkTimeAndSendMessage();
};
 
module.exports.onStart = () => {};
 
