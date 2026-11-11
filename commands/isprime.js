module.exports = async function(sock, chatId, msg, q) {
    const number = Number(q);
    if (!q || !Number.isSafeInteger(number) || number < 0) return await sock.sendMessage(chatId, { text: '⚠️ .isprime <number>' }, { quoted: msg });
    let prime = number >= 2;
    if (prime) for (let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) { prime = false; break; }
    await sock.sendMessage(chatId, { text: `🔢 *${number}* is ${prime ? 'a Prime number ✅' : 'Not a Prime number ❌'}` }, { quoted: msg });
};
