require("dotenv/config");

const { Client } = require("discord.js");

const client = new Client({
  intents: ["Guilds", "GuildMembers", "GuildMessages"],
});

client.on("ready", () => {
  console.log("Bot is ready");
});

client.login(process.env.TOKEN);
