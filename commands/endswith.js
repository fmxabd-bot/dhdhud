module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .endswith <text>|<suffix>' }, { quoted: msg });
    const [text, suf] = q.split('|');
    const result = (text || '').endsWith((suf || '').trim());
    await sock.sendMessage(chatId, { text: result ? '✅ Yes.' : '❌ No.' }, { quoted: msg });
};
