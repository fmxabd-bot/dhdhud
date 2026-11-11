module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .reverse <text>' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: q.split('').reverse().join('') }, { quoted: msg });
};
