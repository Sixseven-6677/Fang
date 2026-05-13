module.exports.config = {
  name: "تيد",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NTKhang",
  description: "معرف المجموعة 👽",
  commandCategory: "group",
  usages: "tid",
  cooldowns: 5,
  dependencies: '',
};

module.exports.run = async function({ api, event }) {
  return api.sendMessage(
    `🔍 معرف المجموعة:\n${event.threadID}`,
    event.threadID,
    event.messageID
  );
};
