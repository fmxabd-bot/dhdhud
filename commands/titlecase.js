module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .titlecase <text>' }, { quoted: msg });
    const result = q.toLowerCase().replace(/(?:^|\s)\S/g, c => c.toUpperCase());
    await sock.sendMessage(chatId, { text: result }, { quoted: msg });
};
