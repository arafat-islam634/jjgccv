const axios = require('axios');

module.exports = {
  config: {
    name: "country",
    aliases: ['flag'],
    version: "1.0",
    author: "Samir B. Thakuri + OtinXSandip",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Guess the country"
    },
    longDescription: {
      en: "Guess the country name by its flag"
    },
    category: "game",
    guide: {
      en: "{pn}"
    },
  },

  onReply: async function ({ args, event, api, Reply, commandName, usersData }) {
    const { dataGame, country, nameUser } = Reply;
    if (event.senderID !== Reply.author) return;

    switch (Reply.type) {
      case "reply": {
        const userReply = event.body.toLowerCase();
        if (userReply === country.toLowerCase()) {
          api.unsendMessage(Reply.messageID).catch(console.error);
          const rewardCoins = 300;
          const rewardExp = 10; 
          const senderID = event.senderID;
          const userData = await usersData.get(senderID);
          await usersData.set(senderID, {
            money: userData.money + rewardCoins,
            exp: userData.exp + rewardExp,
            data: userData.data
          });

          const msg = {
            body: `✅ ${nameUser}, 𝗬𝗼𝘂𝗿 𝗔𝗻𝘀𝘄𝗲𝗿 𝗖𝗼𝗿𝗲𝗰𝗰𝘁𝗹𝘆 !\n𝗔𝗻𝘀𝘄𝗲𝗿: ${country}\n𝗬𝗼𝘂 𝗛𝗮𝘃𝗲 𝗥𝗲𝗰𝗶𝘃𝗲𝗱 ${rewardCoins} 𝗖𝗼𝗶𝗻𝘀 𝗔𝗻𝗱 ${rewardExp} 𝗘𝘅𝗽 𝗔𝘀 𝗔 𝗥𝗲𝘄𝗮𝗿𝗱!`
          };
          return api.sendMessage(msg, event.threadID, event.messageID);
        } else {
          api.unsendMessage(Reply.messageID).catch(console.error);
          const msg = `${nameUser}, The answer is wrong!!\orrect answer is: ${country}`;
          return api.sendMessage(msg, event.threadID);
        }
      }
    }
  },

  onStart: async function ({ api, event, usersData, commandName }) {
    const { threadID, messageID } = event;
    const timeout = 60;

    try {
      const response = await axios.get('https://sandipapi.onrender.com/flag');
      const ansData = response.data;
      const { link, country } = ansData;
      const namePlayerReact = await usersData.getName(event.senderID);

      const msg = {
        body: `What's the name of the country as shown in the flag picture?`,
        attachment: await global.utils.getStreamFromURL(link)
      };

      api.sendMessage(msg, threadID, async (error, info) => {
        if (error) {
          console.error("Error sending message:", error);
          return;
        }

        global.GoatBot.onReply.set(info.messageID, {
          type: "reply",
          commandName,
          author: event.senderID,
          messageID: info.messageID,
          dataGame: ansData,
          country,
          nameUser: namePlayerReact
        });

        setTimeout(function () {
          api.unsendMessage(info.messageID).catch(console.error);
        }, timeout * 1000);
      });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
};
