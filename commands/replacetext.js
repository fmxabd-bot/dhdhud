module.exports = async function(sock, chatId, msg, q) {
    if (!q || !q.includes('|')) return await sock.sendMessage(chatId, { text: '⚠️ .replacetext <text>|<find>|<replace>' }, { quoted: msg });
    const [text, find, replace] = q.split('|');
    if (text === undefined || find === undefined || replace === undefined) {
        return await sock.sendMessage(chatId, { text: '⚠️ .replacetext <text>|<find>|<replace>' }, { quoted: msg });
    }
    await sock.sendMessage(chatId, { text: text.split(find).join(replace) }, { quoted: msg });
};
