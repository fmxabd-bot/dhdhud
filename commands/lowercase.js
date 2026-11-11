module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .lowercase <text>' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: q.toLowerCase() }, { quoted: msg });
};
