module.exports = async function(sock, chatId, msg, q) {
    const symbols = ['🍒','🍋','🍇','🍉','⭐','💎','7️⃣'];
    const spin = () => symbols[Math.floor(Math.random() * symbols.length)];
    const result = [spin(), spin(), spin()];
    const win = result[0] === result[1] && result[1] === result[2];
    await sock.sendMessage(chatId, { text: `🎰 [ ${result.join(' | ')} ]\n\n${win ? '🎉 Jackpot! You win!' : '😢 No match, try again.'}` }, { quoted: msg });
};
