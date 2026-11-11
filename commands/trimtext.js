module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .trimtext <text>' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: q.trim() }, { quoted: msg });
};
