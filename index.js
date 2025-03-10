const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.7625765343:AAHT3yUTUtmKtSOv-EDhIYj5fhLynw-Icas);

bot.start((ctx) => ctx.reply('Welcome! I am your Web3 Bot.'));
bot.help((ctx) => ctx.reply('Send /start to get started!'));

bot.launch();
console.log('Bot is running...');

// Handle graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
