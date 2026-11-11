module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .removeextra <text>' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: q.replace(/\s+/g, ' ').trim() }, { quoted: msg });
};
