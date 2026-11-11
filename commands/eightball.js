module.exports = async function(sock, chatId, msg, q) {
    if (!q) return await sock.sendMessage(chatId, { text: '⚠️ .8ball <question>' }, { quoted: msg });
    const answers = ['Yes, definitely.','It is certain.','Without a doubt.','Most likely.','Ask again later.','Cannot predict now.','Don\'t count on it.','My reply is no.','Very doubtful.','Outlook not so good.'];
    const answer = answers[Math.floor(Math.random() * answers.length)];
    await sock.sendMessage(chatId, { text: `🎱 *Question:* ${q}\n*Answer:* ${answer}` }, { quoted: msg });
};
