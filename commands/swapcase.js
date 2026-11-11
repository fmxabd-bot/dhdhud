module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .swapcase <text>' }, { quoted: msg });
    const result = q.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    await sock.sendMessage(chatId, { text: result }, { quoted: msg });
};
