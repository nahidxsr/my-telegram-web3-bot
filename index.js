const TelegramBot = require('node-telegram-bot-api');

// তোমার BotFather থেকে নেওয়া API Token এখানে বসাও
const token = '7625765343:AAHT3yUTUtmKtSOv-EDhIYj5fhLynw-Icas;

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! Your Telegram bot is running successfully.');
});

console.log('Bot is running...');
