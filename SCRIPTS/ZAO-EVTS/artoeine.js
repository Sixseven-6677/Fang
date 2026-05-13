module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.2",
 credits: "DungUwU",
 description: "Anti-leave"
};

module.exports.run = async ({ event, api, Threads, Users }) => {
  try {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (data.antiout == false) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId)
      || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId)
      ? "self-separation" : "being kicked";
    if (type == "self-separation") {
      api.addUserToGroup(
        event.logMessageData.leftParticipantFbId,
        event.threadID,
        (error) => {
          if (error) {
            api.sendMessage(
              `😈 ${name} | يمنع الهروب في حضور السيد الشاب 🔥`,
              event.threadID
            );
          } else {
            api.sendMessage(
              `🩸 ${name} حاول الهروب... تم استدعاؤه مجدداً 😈`,
              event.threadID
            );
          }
        }
      );
    }
  } catch (e) {}
};
