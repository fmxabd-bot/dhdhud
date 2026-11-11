module.exports = async function(sock, chatId, msg, q) {
    const n = parseInt(q);
    if (!q || isNaN(n) || n < 1 || n > 50) return await sock.sendMessage(chatId, { text: '⚠️ .fibonacci <count 1-50>' }, { quoted: msg });
    const seq = [0, 1];
    for (let i = 2; i < n; i++) seq.push(seq[i-1] + seq[i-2]);
    await sock.sendMessage(chatId, { text: `🔁 Fibonacci:\n${seq.slice(0, n).join(', ')}` }, { quoted: msg });
};
