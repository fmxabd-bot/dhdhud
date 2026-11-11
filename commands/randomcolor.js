module.exports = async function(sock, chatId, msg, q) {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toUpperCase();
    await sock.sendMessage(chatId, { text: `🎨 Random color: *${color}*` }, { quoted: msg });
};
