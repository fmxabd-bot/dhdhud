module.exports = async function(sock, chatId, msg, q) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letter = letters[Math.floor(Math.random() * letters.length)];
    await sock.sendMessage(chatId, { text: `🔤 Random letter: *${letter}*` }, { quoted: msg });
};
