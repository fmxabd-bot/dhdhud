module.exports = async function(sock, chatId, msg, q) {
    const sides = q && !isNaN(parseInt(q)) ? Math.max(2, parseInt(q)) : 6;
    const roll = Math.floor(Math.random() * sides) + 1;
    await sock.sendMessage(chatId, { text: `🎲 You rolled a *${roll}* (1-${sides})` }, { quoted: msg });
};
