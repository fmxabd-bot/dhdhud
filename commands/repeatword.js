module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .repeatword <word>|<count>' }, { quoted: msg });
    const [word, countStr] = q.split('|');
    const count = Math.min(parseInt(countStr) || 1, 50);
    await sock.sendMessage(chatId, { text: (word || '').trim().repeat(count) }, { quoted: msg });
};
