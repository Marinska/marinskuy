require('dotenv').config();

const { Client, IntentsBitField } = require('discord.js');

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

        // if (msg.content == '.xx'){
    //     msg.channel.send('x');
    //     return;
    // } 

    if (msg.content == '.pagi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/723550821832458281/1155824881229897789/stlnppa.png');
        return;
    }

        if (msg.content == '.ok'){
        msg.channel.send('https://i.pinimg.com/originals/54/a4/00/54a4008daad4565a9b5db1b94e59c74c.jpg');
        return;
    } 

    if (msg.content == '.ada' || msg.content == '.adasaja'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1064502375160762379/adaadasaja.jpg');
        return;
    }

    if (msg.content == '.tergantung'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1057358476877250601/ea.jpg');
        return;
    }
    
    if (msg.content == '.ampun'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/813066861365166090/jaog.jpg');
        return;
    }

    if (msg.content == '.bacot' || msg.content == '.bct'){
        msg.channel.send('https://cdn.discordapp.com/attachments/723550821832458281/1155816673220247552/image.png');
        return;
    }

     if (msg.content == '.diam'){
        msg.channel.send('https://cdn.discordapp.com/attachments/723550821832458281/1155816582774272020/image.png');
        return;
    }

    if (msg.content == '.nyimak'){
        msg.channel.send('https://tenor.com/view/entertainment-michael-jackson-wow-amazing-interesting-gif-14302319');
        return;
    }

    if (msg.content == '.berak'){
        msg.channel.send('https://cdn.discordapp.com/attachments/723550821832458281/1155517553695789169/image.png');
        return;
    }

    if (msg.content == '.maulima'){
        msg.channel.send('https://cdn.discordapp.com/attachments/969596173608443905/1154753391843622932/FB_IMG_1688108344048.jpg');
        return;
    }

    if (msg.content == '.wleo'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1082588496893583441/ea.jpg');
        return;
    }

    if (msg.content == '.telat'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/993358037958017104/ea.jpg');
        return;
    }

    if (msg.content == '.renjon' || msg.content == '.renzon'){
        msg.channel.send('https://cdn.discordapp.com/attachments/869583172025851914/1155511986029858958/image.png');
        return;
    }

    if (msg.content == '.asik'){
        msg.channel.send('https://cdn.discordapp.com/attachments/869583172025851914/1155512441598378014/image.png');
        return;
    }

    if (msg.content == '.apasi' || msg.content == '.apasih' || msg.content == '.paansi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/869583172025851914/1155512531406823484/image.png');
        return;
    }

    if (msg.content == '.malas'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1040548380713168926/eaea.jpg');
        return;
    }

    if (msg.content == '.matilampu'){
        msg.channel.send('https://cdn.discordapp.com/attachments/1142061343474720768/1147709090542395513/image-3.png');
    return;
    }

    if (msg.content == '.waduh'){
        msg.channel.send('https://tenor.com/view/waduh-kumala-waduh-meme-gif-16778593609164227100');
        return;
    }

    if (msg.content == '.lucu'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1026148077221974136/ea.jpg');
        return;
    }

    if (msg.content == '.pergi'){
        msg.channel.send('https://cdn.discordapp.com/attachments/812956551320043523/1064502374829408366/ea.png');
        return;
    }

    if (msg.content == '.cmdlist'){
        msg.channel.send('Command list-nya ini masbree\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`\n`.apasi / .apasih`');
        return;
    }
});

client.login(process.env.TOKEN);
