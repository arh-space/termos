
const help = (prefix, instagram, name, uptime, pushname2, user, tanggal, jam) => { 
	return `
┏━━━━━━━━━━━━━━━━━━━━━━
┃ Hai *${pushname2}* 👋 
┃ Prefix : 「 *.* 」
┃ Total Pengguna: *${user.length} User*
┃ Total Donasi: *0%* 🙂
┃ Runtime Bot : ${kyun(uptime)}
┃ Date : *${tanggal}*
┃ Time : *${jam} WIB*
┃ Version : *6.5.0*
┗━━━━━━━━━━━━━━━━━━━━━━

❒ 〖BOT MENU〗

✦ *${prefix}request [Mau Req Fitur Apa?]*
✦ *${prefix}report [lapor bug]*
✦ *${prefix}info*
✦ *${prefix}donasi*
✦ *${prefix}owner*
✦ *${prefix}speed*
✦ *${prefix}daftar*
✦ *${prefix}totaluser*
✦ *${prefix}chatlist*
✦ *${prefix}grouplist*
✦ *${prefix}blocklist*
✦ *${prefix}banlist*
✦ *${prefix}bahasa*


❒ 〖MEDIA & DOWNLOADER MENU〗

✦ *${prefix}tiktokstalk [username]*
✦ *${prefix}igstalk [ayyiin]*
✦ *${prefix}insta [Link]*
✦ *${prefix}instastory [username]*
✦ *${prefix}ssweb [url]*
✦ *${prefix}url2img [Url]*
✦ *${prefix}tiktok*
✦ *${prefix}fototiktok*
✦ *${prefix}meme*
✦ *${prefix}memeindo*
✦ *${prefix}kbbi*
✦ *${prefix}wait*
✦ *${prefix}trendtwit*
✦ *${prefix}google [berita terkini]*
✦ *${prefix}tebakgambar*


❒ 〖MAKER MENU〗

✦ *${prefix}trigger [Reply image]*
✦ *${prefix}rip [Reply image]*
✦ *${prefix}wasted [Reply image]*
✦ *${prefix}tahta [Teks]*
✦ *${prefix}tts [id Haii]*
✦ *${prefix}ttp [Teks]*
✦ *${prefix}attp [Teks]*
✦ *${prefix}csky [Teks]*
✦ *${prefix}cwooden [Teks]*
✦ *${prefix}ccrossfire [Teks]*
✦ *${prefix}cnaruto [Teks]*
✦ *${prefix}stiker*
✦ *${prefix}gifstiker*
✦ *${prefix}toimg*
✦ *${prefix}img2url*
✦ *${prefix}nobg*
✦ *${prefix}tomp3*
✦ *${prefix}ocr*
✦ *${prefix}imoji [❤️]*
✦ *${prefix}cgbutton [Teks]*
✦ *${prefix}csbutton [Teks]*
✦ *${prefix}cflower [Teks]*
✦ *${prefix}ctxtneon [Teks]*
✦ *${prefix}cflame3d [Teks]*
✦ *${prefix}caglow [Teks]*
✦ *${prefix}cgneon [Teks]*
✦ *${prefix}cthunder [Teks]*
✦ *${prefix}cbokeh [Teks]*
✦ *${prefix}ctoxic [Teks]*
✦ *${prefix}cmatrix [Teks]*
✦ *${prefix}cmusic [Teks]*
✦ *${prefix}cblood [Teks]*
✦ *${prefix}cwater [Teks]*
✦ *${prefix}clava [Teks]*
✦ *${prefix}cfire [Teks]*
✦ *${prefix}cholo [Teks]*
✦ *${prefix}cminion [Teks]*
✦ *${prefix}cold [Teks]*
✦ *${prefix}cneon [Teks]*
✦ *${prefix}csunmory [Teks]*
✦ *${prefix}cbalon [Teks]*
✦ *${prefix}cglue3d [Teks]*
✦ *${prefix}csraved [Teks]*
✦ *${prefix}cswrite [Teks]*
✦ *${prefix}cssummer [Teks]*
✦ *${prefix}ccsky [Teks]*
✦ *${prefix}ccloud [Teks]*
✦ *${prefix}crvintage [Teks]*
✦ *${prefix}cbpink [Teks]*
✦ *${prefix}ctext3d [Teks]*
✦ *${prefix}cluxury [Teks]*
✦ *${prefix}cstune3d [Teks/BOT]*
✦ *${prefix}cspace3d [Teks/BOT]*
✦ *${prefix}cmarvel [Teks/BOT]*
✦ *${prefix}cavengers [Teks/BOT]*
✦ *${prefix}cpubg [Teks/BOT]*
✦ *${prefix}cglitch [Teks/BOT]*
✦ *${prefix}cmetal [Teks/BOT]*
✦ *${prefix}cphlogo [Teks/BOT]*
✦ *${prefix}quotemaker [tx/wtrmk/tema]*
✦ *${prefix}nulis [nama/kelas/text]*


❒ 〖GROUP MENU〗

✦ *${prefix}modeanime [On/Off]*
✦ *${prefix}naruto*
✦ *${prefix}minato*
✦ *${prefix}boruto*
✦ *${prefix}hinata*
✦ *${prefix}sakura*
✦ *${prefix}sasuke*
✦ *${prefix}kaneki*
✦ *${prefix}toukachan*
✦ *${prefix}rize*
✦ *${prefix}akira*
✦ *${prefix}itori*
✦ *${prefix}kurumi*
✦ *${prefix}miku*
✦ *${prefix}anime*
✦ *${prefix}animecry*
✦ *${prefix}neonime*
✦ *${prefix}animekiss*
✦ *${prefix}wink*
✦ *${prefix}welcome [On/Off]*
✦ *${prefix}grup [buka/tutup]*
✦ *${prefix}antilink [on/off*
✦ *${prefix}ownergrup*
✦ *${prefix}setpp*
✦ *${prefix}infogc*
✦ *${prefix}add*
✦ *${prefix}kick*
✦ *${prefix}promote*
✦ *${prefix}demote*
✦ *${prefix}setname*
✦ *${prefix}setdesc*
✦ *${prefix}linkgrup*
✦ *${prefix}tagme*
✦ *${prefix}hidetag*
✦ *${prefix}tagall*
✦ *${prefix}mentionall*
✦ *${prefix}fitnah*
✦ *${prefix}listadmin*
✦ *${prefix}openanime*
✦ *${prefix}edotense*
✦ *${prefix}kudeta*┴
✦ *${prefix}nsfw [On/Off]*
✦ *${prefix}nsfwloli*
✦ *${prefix}nsfwblowjob*
✦ *${prefix}nsfwneko*
✦ *${prefix}nsfwtrap*
✦ *${prefix}hentai*
✦ *${prefix}indohot [MAINTENANCE]*
✦ *${prefix}bokep [stepMoms]*
✦ *${prefix}simih [On/Off]*


❒ 〖FUN & GAME MENU〗

✦ *${prefix}anjing*
✦ *${prefix}kucing*
✦ *${prefix}testime*
✦ *${prefix}hilih*
✦ *${prefix}say*
✦ *${prefix}apakah*
✦ *${prefix}kapankah*
✦ *${prefix}bisakah*
✦ *${prefix}rate*
✦ *${prefix}watak*
✦ *${prefix}hobby*
✦ *${prefix}infogempa*
✦ *${prefix}infonomor*
✦ *${prefix}quotes*
✦ *${prefix}truth*
✦ *${prefix}dare*
✦ *${prefix}katabijak*
✦ *${prefix}fakta*
✦ *${prefix}darkjokes*
✦ *${prefix}bucin*
✦ *${prefix}pantun*
✦ *${prefix}randomwp*
✦ *${prefix}katacinta*
✦ *${prefix}jadwaltvnow*
✦ *${prefix}hekerbucin*
✦ *${prefix}katailham*
✦ *${prefix}translate [en/Apa kabar?]*
✦ *${prefix}pasangan [Rawrrr/Iriene]*
✦ *${prefix}gantengcek [Rawrrr]*
✦ *${prefix}cantikcek [Iriene]*
✦ *${prefix}artinama [Rawrrr]*
✦ *${prefix}persengay [Ilham]*
✦ *${prefix}pbucin [Rawrrr]*
✦ *${prefix}bpfont [Rawrrr]*
✦ *${prefix}textstyle [Teks]*


❒ 〖MISC MENU〗

✦ *${prefix}jadwaltv [antv]*
✦ *${prefix}lirik [melukis senja]*
✦ *${prefix}chord [Melukis senja]*
✦ *${prefix}wiki [Adolf Hitler]*
✦ *${prefix}brainly [pertanyaan]*
✦ *${prefix}resepmasakan [Tempe]*
✦ *${prefix}map [Pekanbaru]*
✦ *${prefix}film [Fast and Farious]*
✦ *${prefix}pinterest [gambar kucing]*
✦ *${prefix}infocuaca [Pekanbaru]*
✦ *${prefix}jamdunia [Pekanbaru]*
✦ *${prefix}mimpi [Ular]*
✦ *${prefix}tinyurl [link]*
✦ *${prefix}bitly [link]*
✦ *${prefix}pastebin [teks]*
✦ *${prefix}jadwalsholat [Pekanbaru]*
✦ *${prefix}quran*
✦ *${prefix}quransurah [1]*
✦ *${prefix}tafsir [1/5]*
✦ *${prefix}spamcall [083xxxxxxxxx]*
✦ *${prefix}spamsms [083xxxxxxxx/jumlah]*
✦ *${prefix}spamgmail [Rawrrr@gmail.com]*


❒ 〖TOOLS MENU〗

✦ *${prefix}becrypt [string]*
✦ *${prefix}encode64 [string]*
✦ *${prefix}decode64 [encrypt]*
✦ *${prefix}encode32 [string]*
✦ *${prefix}decode32 [encrypt]*
✦ *${prefix}encbinary [string]*
✦ *${prefix}decbinary [encrypt]*
✦ *${prefix}encoctal [string]*
✦ *${prefix}decoctal [encrypt]*
✦ *${prefix}hashidentifier [Encrypt Hash]*
✦ *${prefix}dorking [dork]*


❒ 〖OWNER MENU〗

✦ *${prefix}addprem [mentioned]*
✦ *${prefix}removeprem [mention]*
✦ *${prefix}setppbot*
✦ *${prefix}setreply*
✦ *${prefix}bc*
✦ *${prefix}bcgc*
✦ *${prefix}ban*
✦ *${prefix}unban*
✦ *${prefix}block*
✦ *${prefix}unblock*
✦ *${prefix}clearall*
✦ *${prefix}delete*
✦ *${prefix}clone*
✦ *${prefix}getses*
✦ *${prefix}leave*


❒ 〖PREMIUM MENU〗

✦ *${prefix}asupan*
✦ *${prefix}playmp3 [menepi]*
✦ *${prefix}fb [link video]*
✦ *${prefix}snack [link snack video]*
✦ *${prefix}ytmp3 [link yt]*
✦ *${prefix}ytmp4 [link yt]*
✦ *${prefix}joox [Monolog Pamungkas]*
✦ *${prefix}smule [Link Video Smule]*


Follow Instagram : ${instagram}
Owner : Rawrrr
Bot : MYTH BOT
Credit : Fxc7 
`
}
exports.help = help
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
