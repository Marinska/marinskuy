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

    // if (msg.content == '.cmdlist')){
    //     const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }

    if (msg.content == '.cmdlist'){
        msg.channel.send('Command list-nya ini masbree \n`.welcome`\n`.ngeri`\n`.pukul`\n`.hai`\n`.gwmulu`\n`.haram`\n`.ahlu`\n`.gaktau / .ndaktau / .gktw`\n`.maap / .maaf`\n`.gedig`\n`.bokep`\n`.muak`\n`.lah / .ngatur`\n`.babi`\n`.sepuh / .sungkem`\n`.gblk`\n`.tuman`\n`.sangean`\n`.euy`\n`.slow / .wet`\n`.udah / .bang`\n`.darimana / .duitnya`\n`.bohong / .boong`\n`.mindset`\n`.gaajak`\n`.ajak`\n`.nanya`\n`.hehe`\n`.kntl / .kontol`\n`.mw / .mau / .akujugamau`\n`.admin`\n`.bagaimana`\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`\n`.apasi / .apasih`');
        msg.delete();
        return;
    }

    //     if (chat.includes('.xx')){
    //     const Embed = new EmbedBuilder().setImage('x');
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
    
        if (chat.includes('.ndaktau') || chat.includes('.gaktau') || chat.includes('.gktw')){
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

    if (chat.includes('.ajak')){
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
        // const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155829527306579988/image.png');
        // msg.channel.send( { embeds: [Embed] })
        msg.channel.send('Maaf stickernya prohibited')
        return;
    }  

    if (chat.includes('.mw') || chat.includes('.mau') || chat.includes('.akujugamau')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1092351228962418748/aku_jg_mw.jpg');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156898224032981042/384243735_6775583322481024_2683809069711358651_n.png?ex=6516a4ee&is=6515536e&hm=8c959cac1f3d6338a3b2e277a83f9e01b9ed1084cfd7144a2665e28596fe3cff&');
        msg.channel.send( { embeds: [Embed1] })
        msg.channel.send( { embeds: [Embed] })
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

     if (chat.includes('.diam')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

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
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155512531406823484/image.png');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168586435260063794/d1827a7a75601cf2e5ceb6f12c8219dc.png?ex=65524ded&is=653fd8ed&hm=2763dbdb35278f182f385808f2da5d9c2d9514b9c814a6a90c4ab7a53b9abaea&');
        msg.channel.send( { embeds: [Embed] })
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


});

client.login(process.env.TOKEN);