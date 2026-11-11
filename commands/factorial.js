module.exports = async function(sock, chatId, msg, q) {
    const number = parseInt(q);
    if (!q || isNaN(number) || number < 0 || number > 170) return await sock.sendMessage(chatId, { text: '⚠️ .factorial <number 0-170>' }, { quoted: msg });
    let result = 1n;
    for (let i = 2n; i <= BigInt(number); i++) result *= i;
    await sock.sendMessage(chatId, { text: `🧮 ${number}! = *${result.toString()}*` }, { quoted: msg });
};
