module.exports = {
	config: {
		name: "gf",
		version: "1.2",
		author: "RANA",//Don't change the credit because I made it. Any problems to contact me. https://facebook.com/100063487970328
		countDown: 5,
		role: 0,
		shortDescription: "no prefix",
		longDescription: "no prefix",
		category: "love",
	},
  
	onStart: async function () { },

	onChat: async function ({ event, message }) {
		if (!event.body) return;

		const command = event.body.toLowerCase();

		const messages = [
 "___ღ❥︎🦋💚ツ༉এই নে তোরে Gf দিছি তাও লুচ্চামি করা বন্ধ কর ꨄ︎⁂༄🤟🤟🖤\n\n https://www.facebook.com/profile.php?id=61575230511584\n\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 😻",

"༊༎এই নে তোর Gf খুশি থাক তাও বারবাতারির পিছনে ঘুরিস নাহ─༅༎•😁😹༅༎•\n\n https://www.facebook.com/profile.php?id=100084374952746\n\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 😻 ",

"༄⁂🤍♡︎এই নে তরে Gf দিয়ে বাচাইয়া দিছি-!!😹 \n এখন থেকে আর কারো গ্রুপ ঝাইয়া কান্দিস না︵🦋❤️‍🩹🤧\n\n https://www.facebook.com/profile.php?id=61574433925849\n\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 😻",

"༄❥︎এই নে তোরে Gf দিছি তাও ভাই মেয়েদের ওই দিকে তাকাইস নাহ-!!🥺 ❞༏༏\n\nhttps://www.facebook.com/profile.php?id=61574874694563 ",

"❞༎༊এই নে তোরে Gf দিলাম চিন্তা করিস না খুব সুখে রাখবে তোরে কান্দিস নাহ আর-!!🤧🫣࿐🌚🐸\n\nhttps://www.facebook.com/profile.php?id=100017524006256 ",
"এই নে তোর Gf এখন থেকে আমারে Respect দিয়া কথা বলবি-!!😾😾👈\n\nhttps://www.facebook.com/profile.php?id=61574591878596 ",

"ღ᭄✨🍓>-এই নে তোর  GF এখন থেকে পাঁচ ওয়াক্ত নামাজ পরবি_______😾🦋࿐\n\nhttps://www.facebook.com/profile.php?id=61565547658747 ",

"❥┈•༏༏༏❝এই নে তোর Gf এখন থেকে সবার পোস্টে রিয়েক্ট দিবি-!!😾😈\n\nhttps://www.facebook.com/profile.php?id=61574134387936 ",

"༊❝এই নে তোর Gf আজকের পর থেকে কোনো মেয়েদের দিকে তাকালে ঘুসি দিয়ে তোর নাক ফাটিয়ে ফেলবো-!! 😾👊༆᭄\n\n https://www.facebook.com/profile.php?id=61574884506420",

"⎯͢⎯⃝─•💙᭄🌸এই নে তোরে Gf দিলাম আজ থেকে বুইড়া বুইড়া বেডি গুলার দিকে আর তাকাইস না-|ღ᭄😌\n\n https://www.facebook.com/profile.php?id=61557787423927",

"𝄞⋆⃝✿এই নে তোরে Gf দিছি আজ থেকে আর খারাপ কাজ করিস নাহ-!!✨💜\n\n https://www.facebook.com/profile.php?id=61575196402686",
"💚🌸ღ᭄এই নে তোকে Gf দিলাম আজ থেকে আল্লাহর কালাম ছারিস নাহ︵🩷🪽🌼︵┼🩵🪽─\n\n",

"︵❝།།💖🌸নে তোর Gf  আজ থেকে আর হারাম কাজ করিস না....!🖤🤲📿\n\n https://www.facebook.com/profile.php?id=61573863403230 ",

"༉༎༉💙🐰এই নে তোর Gf আজ থেকে আর অন্যের Gf কে দেখে কান্দিস না🫣🌚🐸࿐\n\nhttps://www.facebook.com/profile.php?id=61573708199960\n\n𝙲𝚛𝚎𝚊𝚝𝚘𝚛 : 𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙽𝙰 😻 "

    ];

		const images = [
  "https://i.imgur.com/IC9zjVq.jpeg",
  "https://i.imgur.com/r0Ksgwm.jpeg",
  "https://i.imgur.com/b8GBQF3.jpeg",
  "https://i.imgur.com/b4RwCkO.jpeg",
  "https://i.imgur.com/39q1VO3.jpeg ",
  "https://i.imgur.com/llyOW3C.jpeg ",
  "https://i.imgur.com/Mv5zu3h.jpeg",
  "https://i.imgur.com/nasSwNe.jpeg ",
  "https://i.imgur.com/yxoOd8o.jpeg",
  "https://i.imgur.com/Dt6Cokc.jpeg",
  "https://i.imgur.com/nriKSE9.jpeg ",
  "https://i.imgur.com/flUAZT0.jpeg",
  "https://i.imgur.com/HSFylAY.jpeg",
  "https://i.imgur.com/tUIrO6n.jpeg ",
  "https://i.imgur.com/QD6L0XW.jpeg"

		];

		
		if (command === "gf dew" || command === "need gf" || command === "gf") {
			const randomMessage = messages[Math.floor(Math.random() * messages.length)];
			const randomImage = images[Math.floor(Math.random() * images.length)];

			return message.reply({
				body: randomMessage,
				attachment: await global.utils.getStreamFromURL(randomImage)
			});
		}
//other cmd
		if (command === "bow dew" || command === "sali dew") {
			const replyMessage = "⎯͢⎯⃝─• ভাই আমি তো কাজী না, যে তোকে বিয়ে করিয়ে দিবো 😒/- \n তবে gf লাগলে বল ঐটা দিতে পারবো.. //-🫵😺";
			return message.reply({ body: replyMessage });
		}
	}
};
