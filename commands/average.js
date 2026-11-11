module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .average <num1,num2,num3,...>' }, { quoted: msg });
    const nums = q.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    if (!nums.length) return await sock.sendMessage(chatId, { text: '❌ No valid numbers found.' }, { quoted: msg });
    const avg = nums.reduce((a,b) => a+b, 0) / nums.length;
    await sock.sendMessage(chatId, { text: `📊 Average: *${avg.toFixed(2)}*` }, { quoted: msg });
};
