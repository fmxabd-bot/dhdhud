module.exports = async function(sock, chatId, msg, q) {
    let min = 1, max = 100;
    if (q) {
        const parts = q.split(/\s+/).map(Number);
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) { min = parts[0]; max = parts[1]; }
    }
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    await sock.sendMessage(chatId, { text: `🔢 Random number: *${num}*` }, { quoted: msg });
};
