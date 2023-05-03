const TelegramBot = require("node-telegram-bot-api");
const token = "5619823593:AAGLXWnd15H0oR9t_BxjsF3eplaT8lH2A-A";
const bot = new TelegramBot(token, {
    polling: true,
});

bot.on("message", (msg) => {
    console.log("pesan diterima");
    const senderId = msg.chat.id;
    if (msg.text === "halo") {
        bot.sendMessage(senderId, "Halo juga");
    } else if (msg.text === "hai") {
        bot.sendMessage(senderId, "Hai juga");
    } else if (msg.text === "insert") {
        bot.sendMessage(senderId, "silahkan masukkan data");
    }
});
