const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "FT",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "راينر بروان",
  description: "ردود البوت 👽🎧",
  commandCategory: "المطور",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  const { threadID, messageID } = event;
  const body = (event.body || "").toLowerCase().trim();

  const responses = [
    "انا هو السيد الشاب مساوي السماء الذي تم توجيده بفضل موقر السماء والارض 😈",
    "هذا السيد الشاب لايحب الصخب 🐦‍⬛🪭",
    "تنفسو نكحتشونيماكم 🦈🔥",
    "ڪرمًأًّ مًنِ سِـيِّدٍيِّ المَوقَر سِـوٌفُ أّرحًمًکْمً 🪭",
    "قُدٍيِّسِ أّلَسِـمًأّء هّـنِأّ 𓅂𓆣⸙𓉛",
    "لَأّ أّصّـدٍقُ أّنِهّ يِّوٌجّـدٍ کْأّئنِأّتٌ بًهّـذأّ أّلَضًـعٌفُ تٌـجّـرةّ بًتٌـحًدٍيِّ 😈 کْيِّکْيِّ",
    "مۣۗـۙوُقۣۗـۙر آلَسۣۗـۙمۣۗـۙآء آلَمۣۗـۙقۣۗـۙدسۣۗ يۣۗہشۣۗـۙرد آمۣۗـۙهۣۗہآتۣۗـۙكۣۗـۙمۣۗ 🩸",
    "استدعيت السيد القاديس فما أنت بفاعل 👑",
  ];

  const rand = responses[Math.floor(Math.random() * responses.length)];

  if (body === "انكحهم" || body === "انكحهم 🪭") {
    return api.sendMessage(rand, threadID, messageID);
  }

  if (body === "سايم" || body === "محمد") {
    return api.sendMessage("هذا الـسـيـد الـشـاب يـقـدس اسـم الـطـاغـي الـمـوقـر 🛐🥀", threadID, messageID);
  }

  if (body === "الرحمة") {
    return api.sendMessage("ڪرمًأًّ مًنِ سِـيِّدٍيِّ أّلَمًوٌقُر سِـوٌفُ أّرحًمًکْمً 🪭🐦‍⬛", threadID, messageID);
  }

  if (body === "تشو ييفان" || body === "زاو") {
    return api.sendMessage("تٌـأّحًيِّأّتٌ أّلَسِـيِّدٍ أّلَشُـأّبً لَمًنِ نِأّدٍأّنِيِّ 😈 کْيِّکْيِّ", threadID, messageID);
  }

  if (body.indexOf("كيوت") === 0 || body.indexOf("زاوفان") === 0) {
    return api.sendMessage(rand, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { };
