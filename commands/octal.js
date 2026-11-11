module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .octal <number>' }, { quoted: msg });
    if (!isNaN(parseInt(q))) {
        await sock.sendMessage(chatId, { text: `Octal: *${parseInt(q).toString(8)}*` }, { quoted: msg });
    } else {
        try { await sock.sendMessage(chatId, { text: `Decimal: *${parseInt(q, 8)}*` }, { quoted: msg }); }
        catch (e) { await sock.sendMessage(chatId, { text: '❌ Invalid input.' }, { quoted: msg }); }
    }
};
