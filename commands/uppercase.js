module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .uppercase <text>' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: q.toUpperCase() }, { quoted: msg });
};
