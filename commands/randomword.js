module.exports = async function(sock, chatId, msg, q) {
    const words = ['apple','breeze','castle','dragon','ember','falcon','galaxy','harmony','island','jungle','kite','lantern','mirror','nebula','ocean','puzzle','quartz','river','shadow','thunder'];
    const word = words[Math.floor(Math.random() * words.length)];
    await sock.sendMessage(chatId, { text: `📝 Random word: *${word}*` }, { quoted: msg });
};
