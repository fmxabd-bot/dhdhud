module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .startswith <text>|<prefix>' }, { quoted: msg });
    const [text, pre] = q.split('|');
    const result = (text || '').startsWith((pre || '').trim());
    await sock.sendMessage(chatId, { text: result ? '✅ Yes.' : '❌ No.' }, { quoted: msg });
};
