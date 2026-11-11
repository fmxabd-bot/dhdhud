module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .contains <text>|<substring>' }, { quoted: msg });
    const [text, sub] = q.split('|');
    const result = (text || '').includes((sub || '').trim());
    await sock.sendMessage(chatId, { text: result ? '✅ Yes, it contains it.' : '❌ No, it does not.' }, { quoted: msg });
};
