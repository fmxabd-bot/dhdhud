module.exports = async function(sock, chatId, msg, q) {
    const choices = ['rock', 'paper', 'scissors'];
    const emoji = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    const userChoice = (q || '').toLowerCase().trim();
    const picked = choices.find(c => c.startsWith(userChoice));
    if (!picked) return await sock.sendMessage(chatId, { text: '⚠️ .rps <rock/paper/scissors>' }, { quoted: msg });
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    if (botChoice === picked) result = '🤝 It\'s a draw!';
    else if (beats[picked] === botChoice) result = '🎉 You win!';
    else result = '🤖 I win!';
    await sock.sendMessage(chatId, { text: `${emoji[picked]} vs ${emoji[botChoice]}\n\n${result}` }, { quoted: msg });
};
