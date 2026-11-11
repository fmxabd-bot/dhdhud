module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .percentage <part>|<whole>' }, { quoted: msg });
    const [part, whole] = q.split('|').map(s => parseFloat(s.trim()));
    if (isNaN(part) || isNaN(whole) || whole === 0) return await sock.sendMessage(chatId, { text: '❌ Invalid numbers.' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: `📊 ${part} is *${((part/whole)*100).toFixed(2)}%* of ${whole}` }, { quoted: msg });
};
