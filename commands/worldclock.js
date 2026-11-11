module.exports = async function(sock, chatId, msg, q) {
    const zones = {
        'london': 'Europe/London', 'newyork': 'America/New_York', 'tokyo': 'Asia/Tokyo',
        'dubai': 'Asia/Dubai', 'karachi': 'Asia/Karachi', 'delhi': 'Asia/Kolkata',
        'sydney': 'Australia/Sydney', 'paris': 'Europe/Paris', 'moscow': 'Europe/Moscow', 'losangeles': 'America/Los_Angeles'
    };
    if (!q) {
        const list = Object.keys(zones).join(', ');
        return await sock.sendMessage(chatId, { text: `⚠️ .worldclock <city>\n\nAvailable: ${list}` }, { quoted: msg });
    }
    const key = q.toLowerCase().replace(/\s+/g, '');
    const tz = zones[key];
    if (!tz) return await sock.sendMessage(chatId, { text: '❌ City not supported. Try: ' + Object.keys(zones).join(', ') }, { quoted: msg });
    const time = new Date().toLocaleString('en-US', { timeZone: tz, dateStyle: 'medium', timeStyle: 'medium' });
    await sock.sendMessage(chatId, { text: `🕒 *${q}*: ${time}` }, { quoted: msg });
};
