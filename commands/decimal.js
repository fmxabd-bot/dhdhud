module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .decimal <binary|hex|octal number>' }, { quoted: msg });
    let result;
    if (/^[01]+$/.test(q)) result = parseInt(q, 2);
    else if (/^[0-7]+$/.test(q)) result = parseInt(q, 8);
    else if (/^[0-9a-fA-F]+$/.test(q)) result = parseInt(q, 16);
    else return await sock.sendMessage(chatId, { text: '❌ Could not detect base.' }, { quoted: msg });
    await sock.sendMessage(chatId, { text: `Decimal: *${result}*` }, { quoted: msg });
};
