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
        msg.channel.send('Command list-nya ini masbree \n`.cih / .tch / .nandayo / .koitsu`\n`.how`\n`.plsajak / .pleaseajak`\n`.alamak`\n`.tanggapi / .tanggapin / .tanggepi`\n`.dahlah`\n`.serlok / .sharelok / .shareloc`\n`.biarapa / .biarin / .biar`\n`.gakdulu / .gadulu`\n`.sopan`\n`.fakyu / .faku / .fakyou`\n`.thamngan`\n`.santai`\n`.awas`\n`.murka`\n`.speedrungbr / .speedrun`\n`.whysleep / .sleep`\n`.shrug / .shrugs / .idk`\n`.karbit`\n`.gay`\n`.huh`\n`.sshh`\n`.muehe / .smirk`\n`.stonk`\n`.wang / .kaya / .rich`\n`.gz / .grat / .congrats`\n`.yikes`\n`.bruh`\n`.turu`\n`.maso`\n`.yangbener`\n`.serius`\n`.salken`\n`.tatakrama`\n`.darimanainfo / . infomana`\n`.ramaikan / .hitamkan`\n`.sulit`\n`.cukup / .cukub`\n`.3jt / .3juta`\n`.tolong`\n`.logika`\n`.haiya`\n`.buka`\n`.istigfar`\n`.ngotak`\n`.buahaha`\n`.marah`\n`.faham`\n`.makasih`\n`.maugimana / .gimanalagi`\n`.yahaha`\n`.gacor`\n`.sebat`\n`.ewe`\n`.nenen`\n`.apa`\n`.lick`\n`.apacoba / .apa / .apacb`\n`.tewas`\n`.nocrot`\n`.crot`\n`.fbi`\n`.istrigw`\n`.kuma`\n`.manabokep`\n`.aaa / .nooo`\n`.nangid / .nangis / .sad`\n`.nosegs`\n`.segs`\n`.nye`\n`.adios`\n`.mabar`\n`.ml / .mole`\n`.gamain / .gamain?`\n`.main / .main?`\n`.sabar`\n`.kalem`\n`.ribut`\n`.wibu`\n`.byone / .by1`\n`.gas / .gaskan`\n`.skill / .issue`\n`.tunduk / .suhu`\n`.haha / .ngakak / .wkwk`\n`.makan`\n`.sepi`\n`.yauda / .ywdh / .yaudahiya`\n`.sial`\n`.apacoba`\n`.welcome`\n`.ngeri`\n`.pukul`\n`.hai`\n`.gwmulu`\n`.haram`\n`.ahlu`\n`.gaktau / .ndaktau / .gktw`\n`.maap / .maaf`\n`.gedig`\n`.bokep`\n`.muak`\n`.lah / .ngatur`\n`.babi`\n`.sepuh / .sungkem`\n`.gblk`\n`.tuman`\n`.sangean`\n`.euy`\n`.slow / .wet`\n`.udah / .bang`\n`.darimana / .duitnya`\n`.bohong / .boong`\n`.mindset`\n`.gaajak`\n`.ajak`\n`.nanya`\n`.hehe`\n`.kntl / .kontol`\n`.mw / .mau / .akujugamau`\n`.admin`\n`.bagaimana`\n`.pagi`\n`.ok`\n`.ada`\n`.tergantung`\n`.ampun `\n`.asik`\n`.renjon / .renzon`\n`.telat`\n`.wleo`\n`.maulima`\n`.berak`\n`.nyimak`\n`.diam`\n`.bacot / .bct`\n`.pergi`\n`.lucu`\n`.waduh`\n`.matilampu`\n`.malas`\n`.apasi / .apasih`');
        msg.delete();
        return;
    }
    
    //
    //     if (chat.includes('.xx')){
    //     const Embed = new EmbedBuilder().setImage('x');
    //     msg.channel.send( { embeds: [Embed] })
    //     return;
    // }
    //
    
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
    
    
        if (chat.includes('fakyu') || chat.includes('fakyou') || chat.includes('faku') || chat.includes('fackyou') || chat.includes('fucku') || chat.includes('fuckyou')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/869583172025851914/1272591658457890908/ks6GzyG3.png?ex=66bb88d6&is=66ba3756&hm=353093bf8ace7d2f4cbb2b1c26fa9bdca626e2c966633fa5d593c02cc31ebc09&');
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
    
    
        if (chat.includes('.sleep') || chat.includes('.whysleep') || chat.includes('sleep')){
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/RJB1_i_eusQAAAAC/bdo-bdo-shai.gif');
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
        const Embed1 = new EmbedBuilder().setImage('https://marinska.s-ul.eu/XrykI1ZB');
        msg.channel.send( { embeds: [Embed] })
        msg.channel.send( { embeds: [Embed1] })
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/cbekJnhykHoAAAAC/spongebob-squarepants-mr-krabs.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.stonk')){
        const Embed = new EmbedBuilder().setImage('https://marinska.s-ul.eu/M2yrMQwK');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
    
        if (chat.includes('.gz') || chat.includes('.grat') || chat.includes('.congrats')){
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/aUMmsQeoctEAAAAC/ponke-ponkesol.gif');
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/TKq6Fn71XPgAAAAd/seriously-seriously-cat.gif');
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/hqyMIWXTdlMAAAAd/roti-jala-mak-limah-biadab.gif');
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
    
        if (chat.includes('.apacb') || chat.includes('.apacoba') || msg.content == ".apa"){
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/goq48dvYSFYAAAAC/fbi-calling.gif');
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
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/Rao5Y7NKenYAAAAC/disappointed-snapped.gif');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
        

        if (chat.includes('.nangid') || chat.includes('.nangis') || chat.includes('.sad')){
        const Embed = new EmbedBuilder().setImage('https://media1.tenor.com/m/9GfSFmUfRnMAAAAd/man-crying.gif');
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
    
        if (chat.includes('.apacoba')){
        const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1168593059768971265/jWnF43P3A_91APON01Ilsd657SaCpD_nzrofe0n19zmtds9m4sImjbmNj7hddRC0yzifsnj1s900-c-k-c0x00ffffff-no-rj.png?ex=65525418&is=653fdf18&hm=d622a0bc3548d6e941e36159b59ef9e04afca8d07004507c820c4a198daef462&');
        msg.channel.send( { embeds: [Embed] })
        return;
    }
    
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
        // const Embed = new EmbedBuilder().setImage('https://cdn.discordapp.com/attachments/723550821832458281/1155829527306579988/image.png');
        // msg.channel.send( { embeds: [Embed] })
        msg.channel.send('Maaf stickernya prohibited')
        return;
    }  

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