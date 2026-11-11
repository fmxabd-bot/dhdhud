module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .countwords <text>' }, { quoted: msg });
    const count = q.trim().split(/\s+/).filter(Boolean).length;
    await sock.sendMessage(chatId, { text: `📊 Word count: *${count}*` }, { quoted: msg });
};
