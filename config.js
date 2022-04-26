//═══════[ THANKS 2K SUBSCRIBER ]════════\\
/*
• SCRIPT FULL NO ENC
• APIKEY PREMIUM
*/
const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //Apikey Premium
}
global.Prefix = 'Multi'
global.meki = '6282327020033'
global.ownerNumber = '6282327020033'
global.botname = 'Ｈｉｎａｔａ - ＭＤ' 
global.ownername = '𝙼𝙾𝙲𝙷𝙸'
global.owner = ['6282327020033'] 
global.pemilik = ['6282327020033'] 
global.premium = ['6282327020033'] 
global.pengguna = '𝙼𝙾𝙲𝙷𝙸'
global.botnma = 'Ｈｉｎａｔａ - ＭＤ' 
global.ownernma = '𝙼𝙾𝙲𝙷𝙸'
global.packname = ' 𝙼𝙾𝙲𝙷𝙸 ' 
global.author = 'Ｈｉｎａｔａ - ＭＤ' 
global.sessionName = 'kizakixd'
global.prefa = ['#','!','/','']
global.sp = '» ' 
global.mess = {
    success: 'Berhasil.',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'    
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.thumb = fs.readFileSync('./media/zaki.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
