const { Client } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  execute(client) {
    console.log(`${client.user.username} is now something!`);
    client.user.setActivity("I am something!");
  },
};
