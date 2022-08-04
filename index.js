const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const { loadCommands } = require("./Handlers/commandHandler")
const { loadEvents } = require("./Handlers/eventHandler");

const client = new Client({
  intents: [Guilds, GuildMember, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.config = require("./config.json");
client.commands = new Collection();
client
  .login(client.config.token)
  .then(() => {
    loadEvents(client);
    loadCommands(client);
  })
  .catch((err) => console.log(err));
