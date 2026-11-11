module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .vowelcount <text>' }, { quoted: msg });
    const count = (q.match(/[aeiouAEIOU]/g) || []).length;
    await sock.sendMessage(chatId, { text: `🔤 Vowel count: *${count}*` }, { quoted: msg });
};
