module.exports = {
  config: {
    name: "welcome",
    eventType: ["log:subscribe"],
    Owner: "GryKJ"
  },
  run: async ({ event, api }) => {
    try {
      const { threadID } = event;
      if (
        event.logMessageData &&
        event.logMessageData.addedParticipants &&
        event.logMessageData.addedParticipants.some(
          (p) => p.userFbId == api.getCurrentUserID()
        )
      ) {
        api.changeNickname(
          `» ${global.config.PREFIX} « → ${global.config.BOTNAME || "ZAO Bot"}`,
          threadID,
          api.getCurrentUserID()
        );
      }
    } catch (e) {}
  }
};
