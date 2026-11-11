module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .shuffletext <text>' }, { quoted: msg });
    const arr = q.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    await sock.sendMessage(chatId, { text: arr.join('') }, { quoted: msg });
};
