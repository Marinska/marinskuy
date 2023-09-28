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
    if (msg.author.bot){
        return;
    }

    // if (msg.content == 'wembed'){
    //     const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }

    if (msg.content == '.cmdlist'){
        msg.channel.send('Command list-nya ini masbree \n`.tuman`\n`.sangean`\n`.euy`\n`.slow / .wet`\n`.udah / .bang`\n`.darimana / .duitnya`\n`.bohong / .boong`\n`.mindset`\n`.gaajak`\n`.ajak`\n`.nanya`\n`.hehe`\n`.kntl / .kontol`\n`.mw / .mau / .akujugamau`\n`.admin`\n`.bagaimana`\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`\n`.apasi / .apasih`');
        msg.delete();
        return;
    }

    //     if (msg.content == '.xx'){
    //     const Embed = new EmbedBuilder().setImage('x');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }
    
        if (msg.content == '.tuman'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156901508714090536/image.png?ex=6516a7fd&is=6515567d&hm=1fb178820f601ea9429100a6a9c0b9886a3c29ec676c35e5580eb113f1b145c8&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
        if (msg.content == '.sangean'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156901007423438968/490052347109eb74f2c7122953e1f31d67a98bf3.png?ex=6516a786&is=65155606&hm=a2841a29bf53c3e7900ec15e40de846e2b3e7835416874ea594d79b6d8c615a7&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
   
        if (msg.content == '.euy'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156899842908495942/FIyBrTTVQAAJLnv.png?ex=6516a670&is=651554f0&hm=3db653d66e7e0bfefe2dd14995d55674fb0bd21ac23f0155a105c35f46ab57a9&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.slow' || msg.content == '.wet'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1066320786404671548/ea.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }


        if (msg.content == '.udah' || msg.content == '.bang'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1072751258651344947/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.darimana' || msg.content == '.duitnya'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/965436154096787496/dari_mana_duitnya.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.bohong' || msg.content == '.boong'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/734388021620637716/961120770195591168/20220403_045258.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.mindset'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1085127791760125982/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.ajak'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155866106490265750/2Q.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.gaajak'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155866177457885274/main-qimg-6eeb5f1ca2d60b8b266896bdaf268edd-lq.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.nanya'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1078480580301295626/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.hehe'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155831078750261328/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.kntl' || msg.content == '.kontol'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155829527306579988/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }  

    if (msg.content == '.mw' || msg.content == '.mau' || msg.content == '.akujugamau'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1092351228962418748/aku_jg_mw.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.admin'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1107199791563276340/ea.jpg');
        const Embed1 = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1156898224032981042/384243735_6775583322481024_2683809069711358651_n.png?ex=6516a4ee&is=6515536e&hm=8c959cac1f3d6338a3b2e277a83f9e01b9ed1084cfd7144a2665e28596fe3cff&');
        msg.channel.send( { embeds: [Embed] })
        msg.channel.send( { embeds: [Embed1] })
        return;
    }

    if (msg.content == '.bagaimana'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1107284385650184192/bagaimana_mungkin.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.pagi'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155824881229897789/stlnppa.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

        if (msg.content == '.ok'){
        const Embed = new EmbedBuilder().setImage('https://i.pinimg.com/originals/54/a4/00/54a4008daad4565a9b5db1b94e59c74c.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    } 

    if (msg.content == '.ada' || msg.content == '.adasaja'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1064502375160762379/adaadasaja.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.tergantung'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1057358476877250601/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    if (msg.content == '.ampun'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/813066861365166090/jaog.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.bacot' || msg.content == '.bct'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816673220247552/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

     if (msg.content == '.diam'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.nyimak'){
        const Embed = new EmbedBuilder().setImage('https://tenor.com/view/entertainment-michael-jackson-wow-amazing-interesting-gif-14302319');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.berak'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155517553695789169/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.lima' || msg.content == '.maulima'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/969596173608443905/1154753391843622932/FB_IMG_1688108344048.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.wleo'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1082588496893583441/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.telat'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/993358037958017104/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.renjon' || msg.content == '.renzon'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155511986029858958/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.asik'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155512441598378014/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.apasi' || msg.content == '.apasih' || msg.content == '.paansi'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1155512531406823484/image.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.malas'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1040548380713168926/eaea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.matilampu'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/1142061343474720768/1147709090542395513/image-3.png');
    msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.waduh'){
        const Embed = new EmbedBuilder().setImage('https://tenor.com/view/waduh-kumala-waduh-meme-gif-16778593609164227100');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.lucu'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1026148077221974136/ea.jpg');
        msg.channel.send( { embeds: [Embed] })
        return;
    }

    if (msg.content == '.pergi'){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/812956551320043523/1064502374829408366/ea.png');
        msg.channel.send( { embeds: [Embed] })
        return;
    }


});

client.login(process.env.TOKEN);