const axios = require('axios');
module.exports = async function(sock, chatId, msg, q) {
    const num = q && !isNaN(parseInt(q)) ? parseInt(q) : Math.floor(Math.random() * 1000);
    try {
        const res = await axios.get(`http://numbersapi.com/${num}`, { timeout: 8000 });
        await sock.sendMessage(chatId, { text: `🔢 *${num}*: ${res.data}` }, { quoted: msg });
    } catch (e) {
        await sock.sendMessage(chatId, { text: '❌ Could not fetch number fact right now.' }, { quoted: msg });
    }
};
