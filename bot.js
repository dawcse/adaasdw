const Discord = require('discord.js');
const m7md = new Discord.Client();
const gfgfdg = 'j!'; // prefix خليها غير حرف M
const m7mdid = ['341222091523096606']; // الايدي حقك

    m7md.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!m7mdid.includes(message.author.id)) return;
      
  if (message.content.startsWith(gfgfdg + 'setPlaying')) {
    m7md.user.setGame(argresult);
      message.channel.send(`**تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (gfgfdg + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(gfgfdg + 'setWatching')) {
    m7md.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(gfgfdg + 'setListening')) {
    m7md.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تَم تغيير الليسينينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(gfgfdg + 'setStreaming')) {
    m7md.user.setGame(argresult, "https://www.twitch.tv/alSayed");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   **${argresult}**`)
  }
  if (message.content.startsWith(gfgfdg + 'setName')) {
    m7md.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..**${argresult}** `)
} else
if (message.content.startsWith(gfgfdg + 'setAvatar')) {
    m7md.user.setAvatar(argresult);
    message.channel.send(`**جاري تغيير الأفتار... :** `);
}
});

m7md.login("token") 
