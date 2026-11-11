module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .consonantcount <text>' }, { quoted: msg });
    const count = (q.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
    await sock.sendMessage(chatId, { text: `🔡 Consonant count: *${count}*` }, { quoted: msg });
};
