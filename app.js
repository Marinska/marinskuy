require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


// client.on('ready', (c) => {
//     console.log(`${c.user.tag} is online!`)
// });

client.on('messageCreate', (msg) => {

    let chat = msg.content;

    if (msg.author.bot){
        return;
    }


    if (msg.content == '.cmdlist'){
        msg.channel.send('Command list-nya ini masbree \n`.juice / .jus`\n`.gwej / .gweh`\n`.pikir`\n`stres`\n`.punyagw`\n`.berteman`\n`.teman`\n`.gesek`\n`.item`\n`.urwelcome / .yourwelcome / .sama2 / .samasama`\n`.culture`\n`.normal`\n`.cuaks / .chuaks / .cuak`\n`.slebew`\n`.sesat`\n`.matane`\n`.iri`\n`.paten`\n`.takut`\n`.bising / .tido`\n`.mantjing / .mancing`\n`.pilih`\n`.nguwawor / .ngawur`\n`.cemen`\n`.gigit / .titid / .sepong`\n`.rugidong`\n`.haaa`\n`.bingung`\n`.tahan`\n`.ale / .masale`\n`.keren`\n`.tidakmenarik`\n`.menarik`\n`.upik`\n`.yamete`\n`.diamkau / .kaudiam`\n`.woi / .omae`\n`.soro / .jikan / .saatnya`\n`.ping`\n`.party`\n`.horni / .horny`\n`.cum`\n`.hbd / .happybirthday`\n`.kyu / .kyurakuu / .kyukekar / .kekar`\n`.nh`\n`.gae`\n`.otome`\n`.pikachu`\n`.ck`\n`.rasis / .racist`\n`.silit / .utek`')
        msg.channel.send('\n`.wekwek`\n`.tolol`\n`.how`\n`.bayot`\n`.otiwi / .otw / .utiwi`\n`.gws`\n`.cih / .tch / .nandayo / .koitsu`\n`.how`\n`.plsajak / .pleaseajak`\n`.alamak`\n`.tanggapi / .tanggapin / .tanggepi`\n`.dahlah`\n`.serlok / .sharelok / .shareloc`\n`.biarapa / .biarin / .biar`\n`.gakdulu / .gadulu`\n`.sopan`\n`.fakyu / .faku / .fakyou`\n`.thamngan`\n`.santai`\n`.awas`\n`.murka`\n`.speedrungbr / .speedrun`\n`.whysleep / .sleep`\n`.shrug / .shrugs / .idk`\n`.karbit`\n`.gay`\n`.huh`\n`.sshh`\n`.muehe / .smirk`\n`.stonk`\n`.wang / .kaya / .rich`\n`.gz / .grat / .congrats`\n`.yikes`\n`.bruh`\n`.turu`\n`.maso`\n`.yangbener`\n`.serius`\n`.salken`\n`.tatakrama`\n`.darimanainfo / . infomana`\n`.ramaikan / .hitamkan`\n`.sulit`\n`.cukup / .cukub`\n`.3jt / .3juta`\n`.tolong`\n`.logika`\n`.haiya`\n`.buka`\n`.istigfar`\n`.ngotak`\n`.buahaha`\n`.marah`\n`.faham`\n`.makasih`\n`.maugimana / .gimanalagi`\n`.yahaha`\n`.gacor`\n`.sebat`\n`.ewe`\n`.nenen`\n`.lick`\n`.apacoba / .apa / .apcb`\n`.tewas`\n`.nocrot`\n`.crot`\n`.fbi`\n`.istrigw`\n`.kuma`\n`.manabokep`\n`.aaa / .nooo`\n`.nangid / .nangis / .sad`\n`.nosegs`\n`.segs`\n`.nye`\n`.adios`\n`.mabar`\n`.ml / .mole`\n`.gamain / .gamain?`\n`.main / .main?`\n`.sabar`\n`.kalem`\n`.ribut`\n`.wibu`\n`.byone / .by1`\n`.gas / .gaskan`\n`.skill / .issue`\n`.tunduk / .suhu`\n`.haha / .ngakak / .wkwk`\n`.makan`\n`.sepi`\n`.yauda / .ywdh / .yaudahiya`\n`.sial`\n`.welcome`\n`.ngeri`\n`.pukul`\n`.hai`\n`.gwmulu`\n`.haram`\n`.ahlu`\n`.gaktau / .ndaktau / .gktw`\n`.maap / .maaf`\n`.gedig`\n`.bokep`\n`.muak`\n`.lah / .ngatur`\n`.babi`\n`.sepuh / .sungkem`\n`.gblk`\n`.tuman`\n`.sangean`\n`.euy`\n`.slow / .wet`\n`.udah / .bang`\n`.darimana / .duitnya`\n`.bohong / .boong`\n`.mindset`\n`.gaajak`\n`.ajak`\n`.nanya`\n`.hehe`\n`.kntl / .kontol`\n`.mw / .mau / .akujugamau`\n`.admin`\n`.bagaimana`\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`');
        msg.delete();
        return;
    }

    // if (msg.content == '.cmdlist'){
    //     msg.channel.send('Command list-nya ini masbree \n`.diamkau / .kaudiam`\n`.woi / .omae`\n`.soro / .jikan / .saatnya`\n`.ping`\n`.party`\n`.horni / .horny`\n`.cum`\n`.hbd / .happybirthday`\n`.kyu / .kyurakuu / .kyukekar / .kekar`\n`.nh`\n`.gae`\n`.otome`\n`.pikachu`\n`.ck`\n`.rasis / .racist`\b`.silit / .utek`\n`.wekwek`\n`.tolol`\n`.how`\n`.bayot`\n`.otiwi / .otw / .utiwi`\n`.gws`\n`.cih / .tch / .nandayo / .koitsu`\n`.how`\n`.plsajak / .pleaseajak`\n`.alamak`\n`.tanggapi / .tanggapin / .tanggepi`\n`.dahlah`\n`.serlok / .sharelok / .shareloc`\n`.biarapa / .biarin / .biar`\n`.gakdulu / .gadulu`\n`.sopan`\n`.fakyu / .faku / .fakyou`\n`.thamngan`\n`.santai`\n`.awas`\n`.murka`\n`.speedrungbr / .speedrun`\n`.whysleep / .sleep`\n`.shrug / .shrugs / .idk`\n`.karbit`\n`.gay`\n`.huh`\n`.sshh`\n`.muehe / .smirk`\n`.stonk`\n`.wang / .kaya / .rich`\n`.gz / .grat / .congrats`\n`.yikes`\n`.bruh`\n`.turu`\n`.maso`\n`.yangbener`\n`.serius`\n`.salken`\n`.tatakrama`\n`.darimanainfo / . infomana`\n`.ramaikan / .hitamkan`\n`.sulit`\n`.cukup / .cukub`\n`.3jt / .3juta`\n`.tolong`\n`.logika`\n`.haiya`\n`.buka`\n`.istigfar`\n`.ngotak`\n`.buahaha`\n`.marah`\n`.faham`\n`.makasih`\n`.maugimana / .gimanalagi`\n`.yahaha`\n`.gacor`\n`.sebat`\n`.ewe`\n`.nenen`\n`.apa`\n`.lick`\n`.apacoba / .apa / .apacb`\n`.tewas`\n`.nocrot`\n`.crot`\n`.fbi`\n`.istrigw`\n`.kuma`\n`.manabokep`\n`.aaa / .nooo`\n`.nangid / .nangis / .sad`\n`.nosegs`\n`.segs`\n`.nye`\n`.adios`\n`.mabar`\n`.ml / .mole`\n`.gamain / .gamain?`\n`.main / .main?`\n`.sabar`\n`.kalem`\n`.ribut`\n`.wibu`\n`.byone / .by1`\n`.gas / .gaskan`\n`.skill / .issue`\n`.tunduk / .suhu`\n`.haha / .ngakak / .wkwk`\n`.makan`\n`.sepi`\n`.yauda / .ywdh / .yaudahiya`\n`.sial`\n`.apacoba`\n`.welcome`\n`.ngeri`\n`.pukul`\n`.hai`\n`.gwmulu`\n`.haram`\n`.ahlu`\n`.gaktau / .ndaktau / .gktw`\n`.maap / .maaf`\n`.gedig`\n`.bokep`\n`.muak`\n`.lah / .ngatur`\n`.babi`\n`.sepuh / .sungkem`\n`.gblk`\n`.tuman`\n`.sangean`\n`.euy`\n`.slow / .wet`\n`.udah / .bang`\n`.darimana / .duitnya`\n`.bohong / .boong`\n`.mindset`\n`.gaajak`\n`.ajak`\n`.nanya`\n`.hehe`\n`.kntl / .kontol`\n`.mw / .mau / .akujugamau`\n`.admin`\n`.bagaimana`\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`\n`.apasi / .apasih`');
    //     msg.delete();
    //     return;
    // }
    
    //
    //     if (chat.includes('.xx')){
    //     const Embed = new EmbedBuilder().setImage('x');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }
    
        if (chat.includes('.pikir')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1397181605704896632/kalau-semua-harus-bertanggung-jawab-berarti-tidak-akan-ada-v0-5bl7qql30b9d1.png?ex=6880ca45&is=687f78c5&hm=20ca7ea9fcdc5b01fa5e395585455269844705eb9c123ae8507c7702159fc6d7&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gwej') || chat.includes('.gweh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1397181231015137300/4dd51e4afea3fc0ab0d38bc6b6eccf18.png?ex=6880c9eb&is=687f786b&hm=c609ee446af04a3d7242d94bdb3dad2e35621e81193afaf1e941a430542c6aa1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.juice') || chat.includes('.jus')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1397182989862961202/jus.png?ex=6880cb8f&is=687f7a0f&hm=e866a441b0e672d30a522690aef3a2b7434389f19ebfa4d231a10e3552f62372&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gak') || chat.includes('.gk')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1261288024671522836/FB_IMG_1720183590038.jpg?ex=6874ee82&is=68739d02&hm=22d154f16b9f754225a6cd23e7a49c8de3d80309442a635f3c1627f6b46cbb16&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.berteman')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1380517594452201532/El-JWJNVcAAqsdk.png?ex=68647773&is=686325f3&hm=f865ba0becb24ed5fc06e07355690335d2f99986900e624e4f0eb4c232fa1c81&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.minggir') || chat.includes('.punyagw')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1389564713368551464/image.png?ex=6865147c&is=6863c2fc&hm=efc47713b5ada8e229cc0eac6e58fd51aa08106c1c1cc53b20b434b6f93af838&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.stres')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1389555951899512872/0765ed334ed627576c78c5e8d8145e69.png?ex=68650c53&is=6863bad3&hm=6690ed54f58db32bac90e4921897c3ee4550bebf073442e39f5ac276015a9096&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.teman')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1380517594452201532/El-JWJNVcAAqsdk.png?ex=68442ab3&is=6842d933&hm=b88bd428148ee47c654292e901bcdf0ce26e5d4dc6b9ea97d05f0465bae7cc56&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gesek')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1380516897644220586/credit-card-meme.gif?ex=68442a0d&is=6842d88d&hm=a7c6f3f76ceca65df1fbb7791f44cf2b0292d3c60f8f1b7b8b9e96971ebfb2af&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.item')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1108243822468673588/ea.jpg?ex=681c2d7d&is=681adbfd&hm=26c6ce7e71c6789915951f7e95a1aa18f4513c3478d4bc7eabc7c56f391eed76&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.urwelcome') || chat.includes('.urwelcom') || chat.includes('.yourwelcom') || chat.includes('.samasama') || chat.includes('.sama2')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1356610669247467631/happy-birthday-ashleigh.gif?ex=67ed31a4&is=67ebe024&hm=6457ac46264dc90cd3a49060ad025cf5c98731ec4dd810b083487de7a43bf89c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.matane')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337625903907340330/Ey7_xARVEAsUsfI.png?ex=67a820b3&is=67a6cf33&hm=64fc10e60e60850310a3d7bb361daa79213abf909afe7852f1408fc6d040d610&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.sesat')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337626074070122527/43d70560e6a7ac48623c0e043a83c1fd.png?ex=67a820db&is=67a6cf5b&hm=8e899d6dd17df8f834003038917287aff243940beef97acb7c971587c3d89d97&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.culture')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337626497724452936/Ah-I-See-Youre-A-Man-Of-Culture-As-Well-expresses-the-admiration-for-certain.png?ex=67a82140&is=67a6cfc0&hm=97ecb7c1e33d3ba60ce4a6547d3700d3678825a345ba3d9666d529ec12a06f60&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.normal')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337626407370756096/images.png?ex=67a8212b&is=67a6cfab&hm=2823476930e9bf1e5b12858e9832013e29a8fd97c898661669c346dd7daa23a6&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.chuaks') || chat.includes('.cuak') || chat.includes('.cuaks')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337626292383645766/images.png?ex=67a8210f&is=67a6cf8f&hm=146388250ecf9f1e8be1ca7b03fa34c3d7efd38f262ba4e480d3c7b7d4a1cd2b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.slebew')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337626166650998908/FV1YeOsaAAAmSRj.png?ex=67a820f2&is=67a6cf72&hm=40f9e97b2e4dbb0c4173fe25ab78d0f507057199d6d4548b64889b4172111ab9&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.iri')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337625395393986631/47C77012-7DAC-41E1-9BE2-4B91F855C905.png?ex=67a8203a&is=67a6ceba&hm=34b7010972e1375fdfbfbda168c420e7325ae3927bd84c76d44ba34076aa9f9e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.paten')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1337625565062103051/Capture.png?ex=67a82062&is=67a6cee2&hm=d2033c673a15d52c1adc59b52724e7551df7a68bfe61b9dbd6cb3ce73b968214&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.mantjing') || chat.includes('.mancing')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333026766951813131/images.png?ex=6797656b&is=679613eb&hm=13bc4c7cba79fd9125bcd19cb0c5b1bfd61b76d3a414a1b97be9b7153fd8dba7&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.takut')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333026681534812170/images.png?ex=67976557&is=679613d7&hm=4b4a4d5f5e084d654789f593113f063277c7bf7cfb514a2838512a210b2e85c6&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.bising') || chat.includes('.tido')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333026553462001684/artworks-8gzFTa9zi34AchXx-qaXUhw-t500x500.png?ex=67976538&is=679613b8&hm=b61278df5658e754e5c2797f6ee0d564f731fef6fd5ea4a57ccf2135905f554a&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.pilih')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333026096496644128/FmaqvoWacAAoA8h.png?ex=679764cb&is=6796134b&hm=c575c121c896a463e4aef5ecf6bd6a3b36a5371ebdbf6ee874c997f09846a0e3&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.nguwawor') || chat.includes('.ngawur')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333025357217136712/images.png?ex=6797641b&is=6796129b&hm=f7a782401ff7dd6a7fef2278af00b0e453352461fd310854173c528b0b0641cf&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.cemen')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1333023804414496919/66a6df71b5880cae06c45c44c1fccd34.png?ex=679762a9&is=67961129&hm=4bd9da65334d5c50d2fc1a24f8fda77e2db9d94918a10649b1e3673340cb1ac6&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gigit') || chat.includes('.titid') || chat.includes('.sepong')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1330919688443531314/51C43D8C-3E07-4E3F-B4C6-BED494E4066C.png?ex=6796fb4d&is=6795a9cd&hm=f5d38f835020fccd068092ea8eb18e915a051c416735c701c7506ac0a28095ad&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.rugidong')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1330017321451913270/1330055265994932235/rugi-dong-indonesia.gif?ex=678de77e&is=678c95fe&hm=cc008fffb126a5421e9a7281d40463f94742017c7ab99453365b2a0540fb5ecc&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.haaa')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1330017321451913270/1330053170596020251/funny_memes_surprised_patrick_GIF.gif?ex=678c940b&is=678b428b&hm=8ecfa36c8905a0498a6900df0fa4e53d756d811d3b12d80259e1be309b0e148c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.bingung')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1330017321451913270/1330052838272798740/2618e87e973fd0cb6fee8240b5cbc6a9fee50f990452f0c300991521fba71b35.jpg?ex=678c93bb&is=678b423b&hm=b3798196a601fe4f45b24e56a53c51877e3c0664667a767723ccc822b3725841&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.tahan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1330017321451913270/1330052638246572083/1f9f9efcca029cdbc5a3c3d58027b21b697603643f2b49b0c443e14e610b3ab8.jpg?ex=678c938c&is=678b420c&hm=7f2bba7654c419126c716bc3479ee5c35d189d1fee4e7869cb4dca9d16a2753b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.ale') || chat.includes('.masale')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1321414442860412972/1329877633655246868/9h1fwh.jpg?ex=678bf08f&is=678a9f0f&hm=4ffa7120234e21418d610a0bb7d92a6bbc39e6f88f4e8d053c33ffa3e41c0156&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.keren')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1329870613178748938/44e7c4d8d3d1ff2c6a904946f6149f70.png?ex=678bea05&is=678a9885&hm=841dbfec331288556b497279fd826f9c8229916d55cb6cb54549586ece867006&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.tidakmenarik')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1329870068112293898/images.png?ex=678be984&is=678a9804&hm=e8d6e77a0e5e0a6325e18e4082d59f437f5fc11302b3a1ba09ddc1366b5088c0&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.menarik')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1329870030258704495/image-PWsHIpuZq-18560.png?ex=678be97b&is=678a97fb&hm=6804bc3ca20f08ae691daea105b3a929632cb4e450370fbcda48b064b63e5267&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.upik')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1328392505858723971/762ED8E3-DCCF-4D9D-BD2B-508AD9B5B1D1.png?ex=6786896d&is=678537ed&hm=73c5cf2de84690ed408cc45a3bbbd0b119e206d14a420891e5537a1f3639a322&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.yamete')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1309122711997386804/image.png?ex=67406f08&is=673f1d88&hm=c0e08f2059c6cd9f9f93ee534277936cafe2876bbf6cacd95df8297c38c93d07&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.diamkau') || chat.includes('.kaudiam') || chat.includes('.diam')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1290352461315440834/diam.jpg?ex=66fc25e0&is=66fad460&hm=eebc3b6f8e58331965e9e656fe0a330ff2b9ffec5beb4bdc785ec8b37e310e69&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.woi') || chat.includes('.omae')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1289857753971556372/Fj19clEaMAAB3Lu.png?ex=66fa5924&is=66f907a4&hm=bdbefd4924387ad02a1b8c9af4bb23d96c4e3385c39e48c0aa0c52b7a7f8af51&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.soro') || chat.includes('.jikan') || chat.includes('.saatnya')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1289857137526181998/FtR35CYagAILhbA.png?ex=66fa5891&is=66f90711&hm=10f1ccd90b1ba434bc42c9ccde050d4e621eb0c0ef8dc32a2adc134acd5355c1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.ping')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1289233406483365982/image.png?ex=66f813ac&is=66f6c22c&hm=1d3d7f0f635f4bb9fac0b82eed0fad7db103080b17f9abbfe07ee8a05c94609d&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.party')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1292794414804111410/bbc.jpg?ex=6705081f&is=6703b69f&hm=6c76dc20c06c0ac20caabd4b856c5c42fe320271dfb465e306e31f949d1bce97&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.horni') || chat.includes('.horny')){
        const Embed = new EmbedBuilder().setImage('https://marinska.s-ul.eu/K6BafKC3');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.cum')){
        const Embed = new EmbedBuilder().setImage('https://marinska.s-ul.eu/dYm2UUyB');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.racist') || chat.includes('.rasis')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1125705353166860360/1287735855913369623/kido.png?ex=66f2a0f9&is=66f14f79&hm=837c9172e3d5ad0f86e0340f222245508d323be764698a8ef7f24b90d7a4162d&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.ck')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1125705353166860360/1287738476631949348/image.png?ex=66f2a369&is=66f151e9&hm=42fdd4291b83f1de1943811e24f5b5ff8f10b3c58687c26b74c25bb978bdaee5&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.pikachu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1216458579398361160/1286295116373430423/image.png?ex=66ed632d&is=66ec11ad&hm=efa7aa356fe416149cdd7409bc846e732364c2f45cf776aafa4ab0a0ed6b15b1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gae') || chat.includes('.firstofall')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1216458579398361160/1286279310541324339/Screenshot_20240918_184941_com.png?ex=66ed5475&is=66ec02f5&hm=686796b7da9d996ee19324a19f712ab7b3858e2b57f5603b76236d9de5f28617&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.otome')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1216458579398361160/1285994809630134373/2Q.png?ex=66ecf43f&is=66eba2bf&hm=383a022a8d8a18cde9e11d4f4ea6ab27859f9e696b98dc4ac5788ebe7b1bb34e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.nh') || chat.includes('.comenh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1286279475562283082/comejoin2.jpg?ex=66ed549c&is=66ec031c&hm=336a0e065af037002a4a5873e3fea6f8100c4285fdeca949c19552264a39cfce&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.kyukekar') || chat.includes('.kyu') || chat.includes('.kyukekar') || chat.includes('.kekar')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1285961539756494991/image.png?ex=66ec2c83&is=66eadb03&hm=0825b7938ca921ff23a7663b9f97a42fb0de758f94b9580e0c894a31f6360ba3&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.hbd') || chat.includes('.happybirthday') || chat.includes('.hbday')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376101985828212848/hbd.gif?ex=68341a58&is=6832c8d8&hm=38c7b9386dcaa12ec043b5a18ce8dec49c7fb2faa2dd5117bb71c21edb16d220&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.wekwek')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376102021010296873/wekwek.gif?ex=68341a60&is=6832c8e0&hm=b3722ae68fd0bce4cff87e2c6e4db443c9039043c7f956df1f6ba7037efdbf31&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.tolol')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376102013133131926/tolol.gif?ex=68341a5e&is=6832c8de&hm=545402d6aed98206ff9a47f0d4c4febc183b0f605cd9eb6ffc86a88c58b9eca7&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.silit') || chat.includes('.utek')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1285548299746672641/images.png?ex=66eaaba6&is=66e95a26&hm=1f8a33fab2ef806c83960d8fc63b82c2d4e0264736b834910555e43d8b38d196&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.miru')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1284213302410612837/1289232961278967938/si_paling_pro_player.png?ex=66f81342&is=66f6c1c2&hm=ef04f932a75b17f6cd849f885ad0c7b1e894e00ca639dc3ffc1d64f76bf1793f&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.bayot')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1125705353166860360/1283047711066820649/image.png?ex=66e192cc&is=66e0414c&hm=32d129f2ebdad8435b63873ad650a7ca0b46e5acc5b3e7ba7f1724730f180716&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.otiwi') || chat.includes('.otw') || chat.includes('.utiwi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1119425469486477402/FB_IMG_1686903054618.jpg?ex=66deebf5&is=66dd9a75&hm=a9a2d139d651e9d3624498f6da273d1993dbd8763fa1eda8f994058dc5b63d1e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gws')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1278696207211827312/FspJOI4aIAIGRhU.png?ex=66d1be24&is=66d06ca4&hm=b86139d824bb4b6fe9e8fc658f839ed28319ca01389f5d1cc405c040099f56f8&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.how')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1277236502702588027/White-Monkey-Meme.png?ex=66cc6eb0&is=66cb1d30&hm=32cdac8d5bc87b82f6a472cca320fe297c789d3c80f56038da093a64d473490b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.cih') || chat.includes('.tch') || chat.includes('.nandayo') || chat.includes('.koitsu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1277236162406256682/3e0a3bbbd36c2b50544ee68e7a27c215.png?ex=66cc6e5f&is=66cb1cdf&hm=43c9dc1fbd784804b38f4c354657c63f863327740f56be74528f3428e672dd64&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.ajak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1277108483640004649/FiYzytuagAA5kw8.png?ex=66cbf776&is=66caa5f6&hm=e334182e9d6e6ecfa50925ba13e6864371ed4629088aebef815a678e11a8a21b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.alamak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273243665879269440/image.png?ex=66bde811&is=66bc9691&hm=623d3ef7958caa812794a6a3adcfdc7673541fb18255ead82af70304a3fa5140&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.tanggapi') || chat.includes('.tanggapin') || chat.includes('.tanggepin')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273243104807358545/Fx2n5MEakAArvXn.png?ex=66bde78b&is=66bc960b&hm=cc99c80ec4d5f72297d97f361ce3057d07c806fe75dab0d9a24355ac75675e17&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.dahlah')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273242906374967347/904a2f9d-f781-4f58-a22d-bfbdd4463ca2-001.png?ex=66bde75c&is=66bc95dc&hm=b1fcd1c726867941001d59710115156ce5a5ac209630a75baf9c567edfef80fd&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.biarapa') || chat.includes('.biar') || chat.includes('.biarin')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273240144882831370/cmju5wvhe0kb1.png?ex=66bde4ca&is=66bc934a&hm=d16dd42c3802e6b3de0949682e43e16f9bc5290656c8b3e940e9a243fbf74ef3&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.sopan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273240359471677480/images.png?ex=66bde4fd&is=66bc937d&hm=d4ef54e0151ffd67adb08402ae7d164bde50967ce90c67cd65329b2410b9e626&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gakdulu') || chat.includes('.gadulu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273240987308920934/image-P6euAffcs-76030.png?ex=66bde593&is=66bc9413&hm=82a43d424d46f21a7d08dd392a6d8dadc79314b313bcab738649e4ce861e3de1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.serlok') || chat.includes('.sharelok') || chat.includes('.shareloc')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1273241704769650688/sharelok-tak-parani-v0-5dw43iy08eid1.png?ex=66bde63e&is=66bc94be&hm=48a7a360e0ec583074a313b4bccd6868b86ea34b797f6156113e58c9e0b15575&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('fakyu') || chat.includes('fakyou') || chat.includes('faku') || chat.includes('fackyou') || chat.includes('fucku') || chat.includes('fuckyou') || chat.includes('Fakyu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1283450400451727464/Discord_hrHMt5AqR7.png?ex=66e309d4&is=66e1b854&hm=1274e884a4b74fc1b9a451fb4baef78c748f24cf8fd8b02b741cfb8973157c8d&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.murka')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1121614913010409563/sticker-fan_11861203_o.png?ex=66b96749&is=66b815c9&hm=255cce5dc41e15ecf3420dd388cfc8b7a9a182f0c3c4c9a9d4f68493ea10396c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.awas')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1232899503162658826/FB_IMG_1705492325305.jpg?ex=66b984a3&is=66b83323&hm=5a4627c7ba0a96b704cb6d5636ffb3d3a33a0a849e18bddc4f71a5f7107a3d1c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.santai')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1077439434527604826/eaea.jpg?ex=66b988ab&is=66b8372b&hm=4cdc9f804b39aecab63abe88139678883edac0c4c1e0e7275e0b3e3cc04d2c16&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.thamngan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/812957489967661076/thamngan.jpg?ex=66b9c1a9&is=66b87029&hm=4d160c98bda637679e1de57d936e791448050417d151b9574d3b6159e70c60e4&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.shrugs') || chat.includes('.shrug') || chat.includes('.idk')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1268165894983520296/Tom-shrug-HD-meme-6.png?ex=66ab6f06&is=66aa1d86&hm=5e8a9bdda59292113a4b68afc1b9b442429ae45f672047c5252b957182ffd601&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.sleep') || chat.includes('.whysleep')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1235985807689515109/1268152501010432041/image.png?ex=66ab628d&is=66aa110d&hm=aaddb94e624cd1bf2201dd51e4a1558eb70089e2bed1d17952a1c305424279c4&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.speedrun') || chat.includes('.speedrungbr')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1235985807689515109/1267468097586204682/image.png?ex=66a8e526&is=66a793a6&hm=6d81d4e672920e507d5fffb7fd7f4748624af279cea333e04d1071bd6ac0c7ef&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.karbit')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1232653759436296252/FB_IMG_1713378933611.jpg?ex=667ca385&is=667b5205&hm=02b24ae7f4af05f5737b37ff9cb0474b6bbdb27b1f2765270124d5e8128adbaf&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.essebayot')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1125705353166860360/1253311913774022656/image.png?ex=6675652d&is=667413ad&hm=cedb9803ed3322b5e05c7ec1a7c0b9a803c141d9262c2828d386a0e5006aaace&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.olun')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376101990530289715/oluns.gif?ex=68341a59&is=6832c8d9&hm=5abe1ecb2a9c17401e5cec56ccae5533766c327dcb4a1f9d5086b52d274ae311&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.huh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1251202644379304048/8h0c8.png?ex=666db8c4&is=666c6744&hm=1eda3f083bb0965904c95915b309990ce112d039777f9d479900ff8c3f2592d4&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gay')){
        const Embed = new EmbedBuilder().setImage('https://marinska.s-ul.eu/cTDSLvxa');
        // const Embed1 = new EmbedBuilder().setImage('https://marinska.s-ul.eu/XrykI1ZB');
        const Embed2 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1235985807689515109/1283448555456954480/image.png?ex=66e3081c&is=66e1b69c&hm=d2325a6e3c05e958fe7ed864b57da18b91e755484e695a0bbd3e6c7406621184&');
        msg.channel.send( { embeds: [Embed] })
        // msg.channel.send( { embeds: [Embed1] })
        msg.channel.send( { embeds: [Embed2] })
        return;
    }
    
    
        if (chat.includes('.sshh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1250083613689647124/14t4o5.png?ex=6669a696&is=66685516&hm=822c5b07f29060844bedbc19c6781505f3a542026dc1c1e7f3fb6353b7e2aefb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.muehe') || chat.includes('.smirk')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1250083334932008960/hqdefault.png?ex=6669a654&is=666854d4&hm=c2b1088ebc733769c74182603791e3b2e75e71d655d705aaa719cc6728af1f5b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.wang') || chat.includes('.kaya') || chat.includes('.rich')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376102017142882324/wang.gif?ex=68341a5f&is=6832c8df&hm=2d4e84e6469891a03665970b582e29c7d173811e652516568b9c2e695f55e36a&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.stonk')){
        const Embed = new EmbedBuilder().setImage('https://marinska.s-ul.eu/M2yrMQwK');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gz') || chat.includes('.grat') || chat.includes('.congrats')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1356602219583242481/angry-congrats-happy-for-you.png?ex=67ed29c5&is=67ebd845&hm=f1c2843cd9ec89e9b938d9432b43b84b74b3545b80ae31c878fac0adca90e721&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.yikes')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1243186952744992839/side-eye-ew.png?ex=66508f92&is=664f3e12&hm=0c46ed10306f5cafe0ef72281d0379d486385c67a8f8570f50e8137a20318a05&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.bruh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1243186516411420712/2b869698-b083-4610-bcb7-835c65b2c502-1685010254803.png?ex=66508f2a&is=664f3daa&hm=0afe885fb22aa31a62b7a6d489584dde0db030546e8196b2df9d9fbf4be2effb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.serius') || chat.includes('.seriusly')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376102006065729586/serius.gif?ex=68341a5c&is=6832c8dc&hm=9da30c86408b06ee7acd2a0481efa7be0831d339a5c9c9e8462651443b4a5b0f&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.yangbener')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1243185423984099389/GDi2sJ7a4AAObPy.png?ex=66508e26&is=664f3ca6&hm=75bd0b3a10c556ae1cee2f79332965a3a9b70f1ea4e270e557b9168e2435fc28&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.maso')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1243184190879563847/8ff452b30aabd042619803b5300cfc3f.png?ex=66508d00&is=664f3b80&hm=890c838f3686cd0ac8fb36fbf2b6bf4ae3507a042bb1559f34015ae8cf1cc3cf&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.turu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1243183320330932224/64b69b11446f948b0ac9cf24a9041cf5.png?ex=66508c30&is=664f3ab0&hm=6eca99216f2c8279d30e806a9a249a43990c79547a23ac229b09e0bb44736d31&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.tatakrama')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1229324974767079424/0bcd026b0e3d6392140834ee186b410f.png?ex=662f4519&is=661cd019&hm=efb191f731bf56f8730f8ed07bebb245d1443789b1e04fcc835fbebd6641937b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.salken')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1229325267462520912/54953166f1012131ec9a577f7a21a809.png?ex=662f455f&is=661cd05f&hm=edb62fa80ff8aee001e797f2e323422c81a5c444ff8a2e7be305ffdcfc61d6bb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.infomana') || chat.includes('.darimanainfo')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1229323994428346430/images.png?ex=662f4430&is=661ccf30&hm=d988f8910a4a376bd1bacbcce3563837c40b49fe6bc06637026591b9311b285d&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ramaikan') || chat.includes('.hitamkan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1229321954444574720/64640867d403497d2b58fa441e750105.png?ex=662f4249&is=661ccd49&hm=531b7f730f4e50956c7e7add7b807cf67a72a4deb18240c0031d1cb90e7b1091&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sulit')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1095286093680742430/ea.jpg?ex=662785aa&is=661510aa&hm=4f474729c56d5f63ba98fbb42a68fac253481a195302d2103e8f7068484b1f4c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.cukup') || chat.includes('.cukub')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1111127709309992971/cukub.png?ex=6629c851&is=66175351&hm=428d56d24df058113e3835d7e3b5e96859e3c0817a0c6c989db8098abcb959c1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.3jt') || chat.includes('.3juta')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1037938614732083250/ea.jpg?ex=662b2629&is=6618b129&hm=187c880282dc3aade17009225fd70594e3f09bb978a3b2363b368b1f2241de87&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.tolong')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1073088909359206400/eaea.jpg?ex=6629d36d&is=66175e6d&hm=2b6e3da47243b55e0d2afa559e1a54927a740eb51340a9ff65aa649db69adb8f&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.logika')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1110901805535219793/ea.jpg?ex=6628f5ed&is=661680ed&hm=217e3a1c306913f22976709029cacda6d77102631025c308acf79f0002d73860&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.istigfar')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1190136015319470090/image.png?ex=66063709&is=65f3c209&hm=37f185a101d358950b8a63a8482dcaccdbe36255510816a5ce78452054edef06&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.buka')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/734258297145917461/1219649131514171494/20240314_204301.jpg?ex=660c11c4&is=65f99cc4&hm=3769488a4207da11a5f951ad3bf8e2cc6abf841a970960f445da2aa96ce73f03&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.haiya')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1218891494765891644/main-qimg-32e1b1c6f2d43734f02c112d44e578fa-lq.png?ex=6609502a&is=65f6db2a&hm=cfa5bf7a72de2dcfc0b1c37da0e82fbb5cfc800b3ecf97eeff952bb0b1927d3c&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ngotak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1118837165804228730/FB_IMG_1686801965485.png?ex=65c4a14f&is=65b22c4f&hm=ac7e95744667979d7ad79d3af9775312673b9e6eb83ae7b817e44db97fc00840&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.buahaha')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376101956904554547/buahaha.gif?ex=68341a51&is=6832c8d1&hm=2f0f5ce80b3132c5d69bdae3aa07348c9d07acfa3e8d30bdc3fe380677016039&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.marah')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1199696341568331876/Far9H2FVUAM-f75.png?ex=65c37b49&is=65b10649&hm=7e332dffbceb733098c10eaab694dddbc64b6fc6438ee89ed6df1db350ce7f70&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.faham')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1199696391937728634/3f554324815a6183498fb891d37b1a97.png?ex=65c37b55&is=65b10655&hm=21a67bce6910b36e55b1932be23f19436a43f86cbc943e26ecb344a10641ffec&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.makasih')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1199696320999456808/cc88ac2a5be6e46519fc34e97bc7b247.png?ex=65c37b44&is=65b10644&hm=9ebc63b88dc2f6279a0cc5b5b72dcba992b0040ae4bfeeb212d151a4726b7a09&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.maugimana') || chat.includes('.gimanalagi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1199696032976621649/F-4jplhbAAA9Mea.png?ex=65c37aff&is=65b105ff&hm=160fae9ee38158d2b52bd5173caff884ff7e92ee3732afefaee837d78a4328f0&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.yahaha')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1199695688875900948/images.png?ex=65c37aad&is=65b105ad&hm=3ad22d35cf8552f1b18f0d04477076539b7b9dc021431b8f785df5317135c055&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gacor')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1191382695620653148/image.png?ex=65b7b199&is=65a53c99&hm=4eba1e9364abd52f67eb45dcba3556fd4f96c04da42a12b1c3c79ae1a52d2e47&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sebat')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1193959370569040114/Sebats.png?ex=65ae9c50&is=659c2750&hm=290d945950635d6f6c838c6cab9f80962be3912ba0cfb0812bd0628a74f3afb2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ewe')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/734388695049830470/989732963929428018/unknown.png?ex=65a9eba6&is=659776a6&hm=3d667c8ed6dc89bc9788c1c0fa20fdba94d1663bd7e18beedd808da99232b763&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.nenen')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/829733282799026197/905446922347765761/received_259481762726523.jpeg?ex=65a7d4a8&is=65955fa8&hm=16e5c1fdedfb37bdd46b05ffef276920c00f4686da98b1ddd1a5e0cf8b9675cd&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.apcb') || chat.includes('.apacoba') || msg.content == ".apa"){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1192408048304672890/cc3238230d5782a557203e71ade68525.png?ex=65a8f788&is=65968288&hm=312903729e33a8e8c6a221d1c589fb51b068608a4e52c8daf04818299186d687&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.lick')){
        const Embed = new EmbedBuilder().setImage('https://media.discordapp.net/attachments/969596173608443905/1189163384264986664/Licka.gif?ex=65a66434&is=6593ef34&hm=9f9113ed8394c0a43a21fc3020d4d2ffa163fd9c88b9238753cfa6095628d155&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.tewas')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1192407284266041424/383158083_345278307958734_8318353226446093087_n.png?ex=65a8f6d2&is=659681d2&hm=67755de59fabe1a5f08621398d829dea799590fedac5233f22a5b0182613310e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.nocrot')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1192406622392291378/22aef48a-7fa6-48d3-a862-9c0048f89b43-1665232037762.png?ex=65a8f634&is=65968134&hm=efac3d48cbf9154a840d2477bac487e37e9f754fee8fdc6a2adbe35c34e8a03b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.crot')){
        const Embed = new EmbedBuilder().setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/855/345/2ad.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.fbi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376101965657935982/fbi.gif?ex=68341a53&is=6832c8d3&hm=04cd510ff8ca6b8d396d0aad65c48add143e12b29bec5e2da3ebfc7832828cfc&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.istrigw')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1183824808379682980/408041592_6905956246157303_3302326474821717493_n.png?ex=659c32c4&is=6589bdc4&hm=83db7f2b8e1d6c0578630dc61639dd1237132201552b60860fbb9e30d060182e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.kuma')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/607289364355219457/1191300756884688976/image.png?ex=65a4f049&is=65927b49&hm=7ee2367d6c44725ee125074799b5e5cae85b2d911c69a40b45c1c18420f38385&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sangka') || chat.includes('.siapa')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1190966056886472805/1022ebfdfc109a02b7564d978ad0b076.png?ex=65a3b893&is=65914393&hm=31b0e12beb14327b2fbea890ac1a811fa20e1e694504e4cfff7cf7f400515b6a&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.manabokep')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1190678081309003877/F1A09fvacAAy3jq.png?ex=65a2ac60&is=65903760&hm=cdffe783c41eb17c2e43c7b372a7aac90197bb4f1313153fdaa163d0125972d2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
        
        if (chat.includes('.aaa') || chat.includes('.nooo')){
        const Embed = new EmbedBuilder().setImage('https://media.tenor.com/m/Rao5Y7NKenYAAAAC/disappointed-snapped.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
        

        if (chat.includes('.nangid') || chat.includes('.nangis') || chat.includes('.sad')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376102000214933514/sad.gif?ex=68341a5b&is=6832c8db&hm=7675b22c9b741e58cd7df6ae01bce8ea0bf784acaba79b758538f6655847a020&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.nosegs')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1190676255255830638/272789290_788831352050272_984064485612735943_n.png?ex=65a2aaac&is=659035ac&hm=0ae2ca2f84b047af3ba73d73e5f72a1cfca0a40cec0ee0b4a0d81671e99c53cf&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.segs')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1190676539902275766/263164453_676350667075878_3753309991797133158_n.png?ex=65a2aaf0&is=659035f0&hm=7e2f72c6f2bbdb7e2a618bb1e698c5251a5e24b5ccc57e88ca571e7676a34a77&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.nye') || chat.includes('.nyenye')){
        const Embed = new EmbedBuilder().setImage('https://media.tenor.com/LdlB7csEwwkAAAAC/damunz-pinoy.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.adios')){
        const Embed = new EmbedBuilder().setImage('https://preview.redd.it/jyfakluns6g51.jpg?width=640&crop=smart&auto=webp&s=d1f3b546bb1d870cda138036ae6f261f073b845e');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (msg.content == ".p" || chat.includes('.mabar')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1176826496640356473/foflon7agaavcdy-488ece9ab947196203f7301270d550bf.png?ex=65704815&is=655dd315&hm=ecf3772371fbfa8bc2a9ddfcb3dd3a307356df4f58b22de6cbfa56f95ff56bf2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ml') || chat.includes('.mole')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1176825905188982846/image.png?ex=65704788&is=655dd288&hm=5296c9bbbf9d3f2b7afff621e17c9351fa0593c9a8464534e2e68607c2981fb2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.main?') || chat.includes('.main')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1176825254174265395/image.png?ex=657046ec&is=655dd1ec&hm=33f35a987eae7dcf37f3d23c82e6eb7a805a936bfe999e6fa5a65f2321b11f03&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gamain?') || chat.includes('.gamain')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1176825005607235594/image.png?ex=657046b1&is=655dd1b1&hm=6c0aaea378ba4ad6a86071fbb7180f45e3a2dc7ea0a3047babf36196fe0eb5cb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sabar') || chat.includes('.tai')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1176822750564855929/image.png?ex=65704498&is=655dcf98&hm=90c893244c28481ccdbccf70bd75293eac31edc28db72fd5d8c4625c51a8aadc&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gas') || chat.includes('.gaskan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1174391380999688322/3fa383d49146b15347c7885dc3c52eb4.png?ex=65676c34&is=6554f734&hm=65d1104fdeaa8c13baf004a3450f1afe571c85806f9b4a151bb7d9adc548fdc4&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.wibu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1174391359294160896/images.png?ex=65676c2f&is=6554f72f&hm=6d2f1952ee9e38442955d4b44e6a91bafc0ce435f876df7b107d47faed6785c3&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.kalem')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1174391472825585705/images.png?ex=65676c4a&is=6554f74a&hm=ed130b439afad1a35d0e5b1dc70211829f9257fa903c8c135b3e54852c336beb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.byone') || chat.includes('.by1')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1174391532112056430/images.png?ex=65676c58&is=6554f758&hm=172959823a000d184457d07ac9af9a05cf5d6e843c4664574d4ceabc76cd2714&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ribut')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1174391659170123786/011b5d7b0a8d8f7ca5376a8f664a7b83.png?ex=65676c76&is=6554f776&hm=ab0877cde5571341c24c0baa383eaa2a65932bc2745986af401065dbb2dcfda1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.skill') || chat.includes('.issue')){
        const Embed = new EmbedBuilder().setImage('https://media.tenor.com/KKzZmeWBm7wAAAAd/skill-issue.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.suhu') || chat.includes('.tunduk')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1169573790364213288/eb07849eaa794939cc5a896b14b33d71.png?ex=6555e579&is=65437079&hm=195862f412e1d712781d2da30011269681a883fa9afde338857ab7735e34f163&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ngakak') || chat.includes('.haha') || chat.includes('.wkwk')){
        const Embed = new EmbedBuilder().setImage('https://media.tenor.com/_h2pvKeGs98AAAAd/laugh-ketawa.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.makan')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1169571485824851978/032005400_1489628388-15802385_1316351755088983_1896050202293305344_n.png?ex=6555e353&is=65436e53&hm=8a75141a097dd957998fd6fcc65c7ee4fbcea3bbe3af338cf62da1eb384fed2b&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sepi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168591916397510676/meme-sepi-amat-15.png?ex=65525308&is=653fde08&hm=70ee863b1013b428d8fe9a0a62627080651200480c33b5297706c1897943681d&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sial')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168592945977512108/images.png?ex=655253fd&is=653fdefd&hm=86a5ffe60a998fa0ed3d2cc785cfab36f88315e3539240bc2c35fc5c501738f2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.yauda') || chat.includes('.ywdh') || chat.includes('.yaudahiya') || chat.includes('.iya')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168592962754707596/DiD6Y8NU0AAGhV3.png?ex=65525401&is=653fdf01&hm=7beff3936a6307f541e0f89fc7f53063e250e68f166f21ac3bd3853a02184d58&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    //     if (chat.includes('.apacoba')){
    //     const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168593059768971265/jWnF43P3A_91APON01Ilsd657SaCpD_nzrofe0n19zmtds9m4sImjbmNj7hddRC0yzifsnj1s900-c-k-c0x00ffffff-no-rj.png?ex=65525418&is=653fdf18&hm=d622a0bc3548d6e941e36159b59ef9e04afca8d07004507c820c4a198daef462&');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }
    
        if (chat.includes('.welcome')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168590664796213390/Z.png?ex=655251dd&is=653fdcdd&hm=51df5c9203a2fbab2e48c72e8cdae58980c75e77326b720f7e97975856019880&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ngeri')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586088898633758/56b26c691b0ece67c7e28b669a1c93a5.png?ex=65524d9a&is=653fd89a&hm=0e175a911a0315cf06c856b4a33165076b859d0becb59a36b79d15a2e5023023&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.pukul')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586286366474441/96ea9d8d5cbf018002f0210e0bea21dc.png?ex=65524dc9&is=653fd8c9&hm=e61eac016d4db7a7d80f5b21c78e0446aa7b689f71ccd3909fcaeefded920328&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.hai')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586381908521102/62f04a82cf7b9308439c8573f12fc395.png?ex=65524de0&is=653fd8e0&hm=034ff6fb26fb499d0bc760045aa8523523b92314586e383130b129297ccc20c2&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gwmulu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586762361241731/sticker-fan_8887130_o.png?ex=65524e3b&is=653fd93b&hm=7a2c0c337d04f237b1c3abacd8b96cb76fc0b4eee1eeb7518ceec4975075cb96&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.haram')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586994541137970/dba222ffabe947e313b5ec878eb8dcce.png?ex=65524e72&is=653fd972&hm=f388704c057df20e02440a71727a07a3f5be4e509598f28021cfd7a8e522a9fb&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ahlu') || chat.includes('.ah')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168587097557446766/Fcijkk2aUAAgWRF.png?ex=65524e8b&is=653fd98b&hm=0ee9c2faf0dd6ea3e058db6738777ef45b8db5ec281dea2cf141ff676814b881&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.ndaktau') || chat.includes('.gaktau') || chat.includes('.gktw') || chat.includes('.yntkts')){
        const Embed = new EmbedBuilder().setImage('https://media.tenor.com/57XAx1F7PWwAAAAd/yntkts-ya-ndak-tau-kok-tanya-saya.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
   
        if (chat.includes('.maap') || chat.includes('.maaf')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168584410749218826/6160526iD3E3E8175AA89D05.png?ex=65524c0a&is=653fd70a&hm=18160d8312eb76b5b6f4c179152877b0ed872407d6a2475509b8e671a25f35d1&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gedig')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168559443357728898/70433674-acd1-4fc1-a76f-8d08fd2ae4af.png?ex=655234ca&is=653fbfca&hm=51d2eab02a390963a4b3a3cb35b8ddc4799a7b0bf3ea69570823b0d360c9a5b5&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.bokep')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168559091812159498/81b4f2f7303f11c4e9fda3e316bc0b7b.png?ex=65523476&is=653fbf76&hm=0f4d4ca6d77824829721667c175c59ee9161bc6ab65c1ad13f516847ae869565&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.muak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1017394620075876372/gw_udah_muak.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.lah') || chat.includes('.ngatur')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1167399233788313650/qwSuqo8.png?ex=654dfc42&is=653b8742&hm=b67a6f19341297ec04e31749cdeca172629e7dd83f079c70187a86ba3a6028e0&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.babi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1142061343474720768/1160227740570615878/image.png?ex=6533e549&is=65217049&hm=6fe34453297b551fc26125481598aa7350920452a9739f800058fa4f3a795d7e&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.sepuh') || chat.includes('.sungkem')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156934700825333780/image.png?ex=6516c6e7&is=65157567&hm=12bb5b01e50616f2279e882dcc2f44dbc454adc69003348d3e1b713e6ff966ef&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.gblk') || chat.includes('.goblok')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156903654511607858/goblok.gif?ex=6516a9fd&is=6515587d&hm=168e7510ad6ce54fa020673fcf42c9916a2296f69d2e1fb5441653bf3ab19594&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.tuman')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156901508714090536/image.png?ex=6516a7fd&is=6515567d&hm=1fb178820f601ea9429100a6a9c0b9886a3c29ec676c35e5580eb113f1b145c8&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (chat.includes('.sangean')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156901007423438968/490052347109eb74f2c7122953e1f31d67a98bf3.png?ex=6516a786&is=65155606&hm=a2841a29bf53c3e7900ec15e40de846e2b3e7835416874ea594d79b6d8c615a7&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
   
        if (chat.includes('.euy')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156899842908495942/FIyBrTTVQAAJLnv.png?ex=6516a670&is=651554f0&hm=3db653d66e7e0bfefe2dd14995d55674fb0bd21ac23f0155a105c35f46ab57a9&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.slow') || chat.includes('.wet')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1066320786404671548/ea.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }


        if (chat.includes('.udah') || chat.includes('.bang')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1072751258651344947/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.darimana') || chat.includes('.duitnya')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/965436154096787496/dari_mana_duitnya.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.bohong') || chat.includes('.boong')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/734388021620637716/961120770195591168/20220403_045258.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.mindset')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1085127791760125982/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.plsajak') || chat.includes('.pleaseajak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155866106490265750/2Q.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.gaajak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155866177457885274/main-qimg-6eeb5f1ca2d60b8b266896bdaf268edd-lq.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.nanya')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1078480580301295626/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.hehe')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155831078750261328/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
        if (chat.includes('.kntl') || chat.includes('.kontol')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1376101983882313778/kntl.gif?ex=68341a57&is=6832c8d7&hm=3c533f3984c7feeab53fe01910e47690765e047bb629539dd9b83671f33dd616&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    //     if (chat.includes('.kntl') || chat.includes('.kontol')){
    //     // const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155829527306579988/image.png');
    //     const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/l_OqJhv5Y1kAAAAd/kontol.gif');
    //     // msg.channel.send( { embeds: [Embed] })
    //     // msg.channel.send('Maaf stickernya prohibited')
    //     return;
    // }  

    if (chat.includes('.mw') || chat.includes('.akujugamau')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1092351228962418748/aku_jg_mw.jpg');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156898224032981042/384243735_6775583322481024_2683809069711358651_n.png?ex=6516a4ee&is=6515536e&hm=8c959cac1f3d6338a3b2e277a83f9e01b9ed1084cfd7144a2665e28596fe3cff&');
        const Embed2 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1229322787391279156/6105c974bbeab5263a966b646020b68f.png?ex=662f4310&is=661cce10&hm=1c53fc420e04d179201e11c0c298fe7d711fa01090d09d2a0e352a7f3821f31f&');
        msg.channel.send( { embeds: [Embed1] })
        msg.channel.send( { embeds: [Embed] })
        msg.channel.send( { embeds: [Embed2] })
        return;
    }

    if (chat.includes('.admin')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1107199791563276340/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.bagaimana')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1107284385650184192/bagaimana_mungkin.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.pagi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155824881229897789/stlnppa.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (chat.includes('.ok')){
        const Embed = new EmbedBuilder().setImage('https://i.pinimg.com/originals/54/a4/00/54a4008daad4565a9b5db1b94e59c74c.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    } 

    if (chat.includes('.ada') || chat.includes('.adasaja')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1064502375160762379/adaadasaja.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.tergantung')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1057358476877250601/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    if (chat.includes('.ampun')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/813066861365166090/jaog.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.bacot') || chat.includes('.bct')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816673220247552/image.png');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586320717820024/66a21a43d52437b56f98a4aa79dc994d.png?ex=65524dd2&is=653fd8d2&hm=5c8571e339cac586d7cb02c165724f2cb693f660c34f981a8fb58a02a4231f8a&');
        msg.channel.send( { embeds: [Embed] })
        msg.channel.send( { embeds: [Embed1] })
        return;
    }

    //  if (chat.includes('.diam')){
    //     const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }

    if (chat.includes('.nyimak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156904964627628072/entertainment-michael-jackson.gif?ex=6516ab35&is=651559b5&hm=fd8e82422f58767aa469f02dbc3c3bbee8d1f7209862a1a523e8cb406b80a8dc&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.berak')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155517553695789169/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.lima') || chat.includes('.maulima')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/969596173608443905/1154753391843622932/FB_IMG_1688108344048.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.wleo')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1082588496893583441/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.telat')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/993358037958017104/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.renjon') || chat.includes('.renzon')){
        // const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155511986029858958/image.png');
        // msg.channel.send( { embeds: [Embed] })
        msg.channel.send('Maaf stickernya prohibited, biar saya wakilin aja\nRENJON ANJ')
        return;
    }

    if (chat.includes('.asik')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155512441598378014/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.apasi') || chat.includes('.apasih') || chat.includes('.paansi')){
        // const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155512531406823484/image.png');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586435260063794/d1827a7a75601cf2e5ceb6f12c8219dc.png?ex=65524ded&is=653fd8ed&hm=2763dbdb35278f182f385808f2da5d9c2d9514b9c814a6a90c4ab7a53b9abaea&');
        // msg.channel.send( { embeds: [Embed] })
        msg.channel.send( { embeds: [Embed1] })
        return;
    }

    if (chat.includes('.malas')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1040548380713168926/eaea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.matilampu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1142061343474720768/1147709090542395513/image-3.png');
    msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.waduh')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156904964162072617/waduh-kumala.gif?ex=6516ab35&is=651559b5&hm=34e10c5db875adfe8e1f48ef023e0868aee9019fdf8e29e8b6dc08d7b2934810&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.lucu')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1026148077221974136/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (chat.includes('.pergi')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1064502374829408366/ea.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

                if (chat.includes('glykatzis')  ||
                chat.includes('embarassing')  ||
                chat.includes('tathoyyur')  ||
                chat.includes('acefam')  ||
                chat.includes('wja4341')  ||
                chat.includes('daml')  ||
                chat.includes('g0dguys')  ||
                chat.includes('everlastingapril')  ||
                chat.includes('schytr')  ||
                chat.includes('minasato')  ||
                chat.includes('rakshasar')  ||
                chat.includes('rabiz')  ||
                chat.includes('brucewaynee')  ||
                chat.includes('blade1')  ||
                chat.includes('lose2win')  ||
                chat.includes('jeko')  ||
                chat.includes('boylambot')  ||
                chat.includes('mxmxm')  ||
                chat.includes('shikuretto')  ||
                chat.includes('scusi')  ||
                chat.includes('atroposx')  ||
                chat.includes('andrews123')  ||
                chat.includes('gabutz')  ||
                chat.includes('kuyatabs')  ||
                chat.includes('pyschotic')  ||
                chat.includes('husay')  ||
                chat.includes('kraizen')  ||
                chat.includes('garandoa')  ||
                chat.includes('naalie')  ||
                chat.includes('geavensociety')  ||
                chat.includes('saosin')  ||
                chat.includes('muklils')  ||
                chat.includes('paansi')  ||
                chat.includes('scripted')  ||
                chat.includes('penshit')  ||
                chat.includes('eterlife')  ||
                chat.includes('godsyxx')  ||
                chat.includes('warftole')  ||
                chat.includes('xenacharm')  ||
                chat.includes('sinigangnaadobo') ||
                chat.includes('aowvn') ||
                chat.includes('achi')
                ){
                    if(msg.channelId == "1128615765722026056"){
                    msg.channel.send("BANNED SER");
                    return;
                }
            return;
    }

    if (chat.includes('kanzakura')){
        if(msg.channelId == "1128615765722026056"){
            msg.channel.send("VERY HANDSOME SER");
            return;

    }}
    if (chat.includes('esseker')){
        if(msg.channelId == "1128615765722026056"){
            msg.channel.send("HE IS BAYOT SER");
            return;

    }}
    if (chat.includes('cindyan') || chat.includes('libragurl')){
        if(msg.channelId == "1128615765722026056"){
            msg.channel.send("SHE GOT TOO MUCH LUCK SER, MUST BAN!");
            return;

    }}
    


});

client.login(process.env.TOKEN);