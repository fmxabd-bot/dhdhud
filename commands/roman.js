module.exports = async function(sock, chatId, msg, q) {
    if (!q || isNaN(parseInt(q))) return await sock.sendMessage(chatId, { text: '⚠️ .roman <number 1-3999>' }, { quoted: msg });
    let num = parseInt(q);
    if (num < 1 || num > 3999) return await sock.sendMessage(chatId, { text: '⚠️ Number must be between 1 and 3999.' }, { quoted: msg });
    const map = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    let result = '';
    for (const [val, sym] of map) { while (num >= val) { result += sym; num -= val; } }
    await sock.sendMessage(chatId, { text: `🏛️ Roman numeral: *${result}*` }, { quoted: msg });
};
