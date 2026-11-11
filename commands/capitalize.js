module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .capitalize <text>' }, { quoted: msg });
    const result = q.charAt(0).toUpperCase() + q.slice(1);
    await sock.sendMessage(chatId, { text: result }, { quoted: msg });
};
