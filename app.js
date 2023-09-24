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

        // if (msg.content == '.x'){
    //     msg.channel.send('x');
    //     return;
    // }

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
});

client.login(process.env.TOKEN);
