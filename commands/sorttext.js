module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .sorttext <word1,word2,...>' }, { quoted: msg });
    const parts = q.split(',').map(s => s.trim()).filter(Boolean);
    await sock.sendMessage(chatId, { text: parts.sort().join(', ') }, { quoted: msg });
};
