const { Client, Location, List, Buttons, LocalAuth} = require('./index');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: false }
});

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log('QR RECEIVED', qr);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('READY');
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);

//COLOCAR MODO DE ENTRADA DE TEXTO PARA RESPOSTAS
               //MODULO DE ABERTURA MSG

        if (msg.body === 'oi') {
            msg.reply("Olá seja bem vindo(a) ao *atendimento do Site Domínio Auto Peças* por favor Digite:⤵️ \n\n1️⃣- *Para orçamentos* \n\n2️⃣- *falar sobre compra já feita* \n\n3️⃣- *Nossos Endereços* \n\n4️⃣- *Falar nos demais setores* "); 
				
		} else if (msg.body === 'Oi' ) {
                
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
        
        } else if (msg.body === 'Olá bom dia' ) {
                
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá bom dia, seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');



            } else if (msg.body === 'OI') {
                client.sendMessage(msg.from, '😎✌🏽🚙 Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
                            
        } else if (msg.body === 'ola') {
             client.sendMessage(msg.from, '😎✌🏽🚙 Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
		} else if (msg.body === 'olá') {
             client.sendMessage(msg.from, '😎✌🏽🚙 Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
		} else if (msg.body === 'Olá') {
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
		} else if (msg.body === 'Bom dia') {
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá bom dia, Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
		} else if (msg.body === 'Boa tarde') {
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá boa tarde, Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
        } else if (msg.body === 'boa tarde') {
            client.sendMessage(msg.from, '😎✌🏽🚙 Olá boa tarde, Olá seja bem vindo(a) ao atendimento do Site Domínio Auto Peças Como podemos ajudar? \nDigite: \n1️⃣- Se precisa de um orçamento \n----------------------------------- \n2️⃣- Para falar sobre uma compra ja feita \n----------------------------------- \n3️⃣- Nossos Endereços \n----------------------------------- \n4️⃣- Falar nos demais setores ');
		
			
		} else if (msg.body === '1') {
              client.sendMessage(msg.from, 'Só mais uma pergunta: \nComo pretende fazer a compra ? \n ➡️Digite "*SITE*" \nPara comprar no site🌏. \n-----------------------------------  \n ou ➡️Digite "*LOJA*" \nPara comprar em nossas lojas🏪');
		
		} else if (msg.body === '2') {
             client.sendMessage(msg.from, 'Para que possamos encontrar seu pedido/compra por gentileza, \nInforme o nº do seu *CPF* ou o nº do seu pedido');}
        
          else if(msg.body =='3') {
            client.sendMessage(msg.from, 'Seja sempre bem vindos(as) em nossas loja:\n\n📍Patriarca: Rua Pinhal, 283 - Cidade Patriarca, São Paulo - SP, 03564-040 \n---------------------------------------------------------------------------------  \n\n📍Rio das Pedras: Av Rio das Pedras, 1553 - Jardim Aricanduva, São Paulo - SP, 03452-000 \n---------------------------------------------------------------------------------\n\n📍Sapopemba : Av. Sapopemba, 2449 - Vila Diva (Zona Leste), São Paulo - SP, 03345-001 \n---------------------------------------------------------------------------------\n\n📍Cursino : Av. do Cursino, 2283 - Vila Gumercindo, São Paulo - SP, 04133-000' ) 
        } 
               
                 // modo botão lista  
     
        //MODO SITE

                else if (msg.body === 'SITE') {
                client.sendMessage(msg.from, 'Legal, em nosso site você compra com segurança e praticidade🚀🔒 \n\nEstamos com desconto de 10% no PIX, BOLETO OU EM 1X No cartão. \n\nSe você não encontrou em nosso site o produto que desejava, não tem problema, *basta escrever abaixo qual produto precisa.* \n\n_Digite nesta sequência:_⤵️ \n👉  Peça | veículo | Ano | modelo | \n\nVeja um exemplo:⤵️ \nPara-choque Dianteiro Corsa 2010 Classic Para pintura');
        }
             
            else if (msg.body == 'Site') {
                client.sendMessage(msg.from,'Legal, em nosso site você compra com segurança e praticidade🚀🔒 \n\nEstamos com desconto de 10% no PIX, BOLETO OU EM 1X No cartão. \n\nSe você não encontrou em nosso site o produto que desejava, não tem problema, *basta escrever abaixo qual produto precisa.* \n\n_Digite nesta sequência:_⤵️ \n👉  Peça | veículo | Ano | modelo | \n\nVeja um exemplo:⤵️ \nPara-choque Dianteiro Corsa 2010 Classic Para pintura');
        }    
            
            else if (msg.body == 'site'){
                client.sendMessage(msg.from,'Legal, em nosso site você compra com segurança e praticidade🚀🔒 \n\nEstamos com desconto de 10% no PIX, BOLETO OU EM 1X No cartão. \n\nSe você não encontrou em nosso site o produto que desejava, não tem problema, *basta escrever abaixo qual produto precisa.* \n\n_Digite nesta sequência:_⤵️ \n👉  Peça | veículo | Ano | modelo | \n\nVeja um exemplo:⤵️ \nPara-choque Dianteiro Corsa 2010 Classic Para pintura');
                
                //MODO LOJA 

        }
             else if (msg.body == 'Loja'){
                client.sendMessage(msg.from,'Seja sempre bem vindo(a) em nossas lojas. \n\n🔁 Estarei direcionando este atendimento para um de nossos vendedores.. \n\n _Você pode digitar qual peça precisa e também colocar em qual loja deseja efetuar a compra_');
           
        }      
            else if (msg.body == 'loja'){
                client.sendMessage(msg.from,'Seja sempre bem vindo(a) em nossas lojas. \n\n🔁 Estarei direcionando este atendimento para um de nossos vendedores.. \n\n _Você pode digitar qual peça precisa e também colocar em qual loja deseja efetuar a compra_');  }   
             
             
                // MODO ENDEREÇO 
            
            else if (msg.body =='4'){
                
                client.sendMessage(msg.from,'Digite por gentileza em qual setor deseja falar.')}
             
             
             else if (msg.body =='#Endereço'){
                client.sendMessage(msg.from,'')}
                
                else if (msg.body =='endereço'){
                    client.sendMessage(msg.from,'')}


         else if (msg.body === '!ping') {
         // Send a new message to the same chat
        client.sendMessage(msg.from, 'Olá seja bem vindo(a) ao *atendimento do Site Domínio Auto Peças* por favor Digite:⤵️ \n\n1️⃣- *Para orçamentos* \n\n2️⃣- *falar sobre compra já feita* \n\n3️⃣- *Nossos Endereços* \n\n4️⃣- *Falar nos demais setores*');


    } else if (msg.body.startsWith('!sendto')) {
        // Direct send a new message to specific id
        let number = msg.body.split(' 2745 ')[1];
        let messageIndex = msg.body.indexOf(number) + number.length;
        let message = msg.body.slice(messageIndex, msg.body.length);
        number = number.includes('551121343400') ? number : `${number}@c.us`;
        let chat = await msg.getChat();
        chat.sendSeen();
        client.sendMessage(number, message);

    } else if (msg.body.startsWith('!subject ')) {
        // Change the group subject
        let chat = await msg.getChat();
        if (chat.isGroup) {
            let newSubject = msg.body.slice(9);
            chat.setSubject(newSubject);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    } else if (msg.body.startsWith('!echo ')) {
        // Replies with the same message
        msg.reply(msg.body.slice(6));
    } else if (msg.body.startsWith('!desc ')) {
        // Change the group description
        let chat = await msg.getChat();
        if (chat.isGroup) {
            let newDescription = msg.body.slice(6);
            chat.setDescription(newDescription);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    } else if (msg.body === '!leave') {
        // Leave the group
        let chat = await msg.getChat();
        if (chat.isGroup) {
            chat.leave();
        } else {
            msg.reply('This command can only be used in a group!');
        }
    } else if (msg.body.startsWith('!join ')) {
        const inviteCode = msg.body.split(' ')[1];
        try {
            await client.acceptInvite(inviteCode);
            msg.reply('Joined the group!');
        } catch (e) {
            msg.reply('That invite code seems to be invalid.');
        }
    } else if (msg.body === '!groupinfo') {
        let chat = await msg.getChat();
        if (chat.isGroup) {
            msg.reply(`
                *Group Details*
                Name: ${chat.name}
                Description: ${chat.description}
                Created At: ${chat.createdAt.toString()}
                Created By: ${chat.owner.user}
                Participant count: ${chat.participants.length}
            `);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    
    } else if (msg.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `The bot has ${chats.length} chats open.`);
    
    
    } else if (msg.body === '!info') {
        let info = client.info;
        client.sendMessage(msg.from, `
            *Connection info*
            User name: ${info.pushname}
            My number: ${info.wid.user}
            Platform: ${info.platform}
        `);
    } else if (msg.body === '!mediainfo' && msg.hasMedia) {
        const attachmentData = await msg.downloadMedia();
        msg.reply(`
            *Media info*
            MimeType: ${attachmentData.mimetype}
            Filename: ${attachmentData.filename}
            Data (length): ${attachmentData.data.length}
        `);
    } else if (msg.body === '!quoteinfo' && msg.hasQuotedMsg) {
        const quotedMsg = await msg.getQuotedMessage();

        quotedMsg.reply(`
            ID: ${quotedMsg.id._serialized}
            Type: ${quotedMsg.type}
            Author: ${quotedMsg.author || quotedMsg.from}
            Timestamp: ${quotedMsg.timestamp}
            Has Media? ${quotedMsg.hasMedia}
        `);
    } else if (msg.body === '!resendmedia' && msg.hasQuotedMsg) {
        const quotedMsg = await msg.getQuotedMessage();
        if (quotedMsg.hasMedia) {
            const attachmentData = await quotedMsg.downloadMedia();
            client.sendMessage(msg.from, attachmentData, { caption: 'Here\'s your requested media.' });
        }
    } else if (msg.body === '!location') {
        msg.reply(new Location(37.422, -122.084, 'Googleplex\nGoogle Headquarters'));
    } else if (msg.location) {
        msg.reply(msg.location);
    } else if (msg.body.startsWith('!status ')) {
        const newStatus = msg.body.split(' ')[1];
        await client.setStatus(newStatus);
        msg.reply(`Status was updated to *${newStatus}*`);
    } else if (msg.body === '!mention') {
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendMessage(`Hi @${contact.number}!`, {
            mentions: [contact]
        });
    } else if (msg.body === '!delete') {
        if (msg.hasQuotedMsg) {
            const quotedMsg = await msg.getQuotedMessage();
            if (quotedMsg.fromMe) {
                quotedMsg.delete(true);
            } else {
                msg.reply('I can only delete my own messages');
            }
        }
    } else if (msg.body === '!pin') {
        const chat = await msg.getChat();
        await chat.pin();
    } else if (msg.body === '!archive') {
        const chat = await msg.getChat();
        await chat.archive();
    } else if (msg.body === '!mute') {
        const chat = await msg.getChat();
        // mute the chat for 20 seconds
        const unmuteDate = new Date();
        unmuteDate.setSeconds(unmuteDate.getSeconds() + 20);
        await chat.mute(unmuteDate);
    } else if (msg.body === '!typing') {
        const chat = await msg.getChat();
        // simulates typing in the chat
        chat.sendStateTyping();
    } else if (msg.body === '!recording') {
        const chat = await msg.getChat();
        // simulates recording audio in the chat
        chat.sendStateRecording();
    } else if (msg.body === '!clearstate') {
        const chat = await msg.getChat();
        // stops typing or recording in the chat
        chat.clearState();
    } else if (msg.body === '!jumpto') {
        if (msg.hasQuotedMsg) { 
            const quotedMsg = await msg.getQuotedMessage();
            client.interface.openChatWindowAt(quotedMsg.id._serialized);
        }
   
   } else if (msg.body === '!buttons') {
        let button = new Buttons('Seja, bem vindo a dominio',[{body:'Por favor selecione o modelo'},{body:' modelo 1 goncalves'},{body:'leite'}],'ehisso',' kauanfooter');
        client.sendMessage(msg.from, button);
	
   
        
	} else if (msg.body === '!Lojas') {
        let sections = [{title:'kauanleitel',rows:[{title:'ListItem1', description: 'desc'},{title:'ListItem2'}]}];
        let list = new List('List body','Selecionar a loja',sections,'Seja sempre bem vindo(a) em nossas lojas','footer');
        client.sendMessage(msg.from, list); 
    } else if (msg.body === '!reaction') {
        msg.react('👍');
    }
});

client.on('message_create', (msg) => {
    // Fired on all message creations, including your own
    if (msg.fromMe) {
        // do stuff here
    }
});

client.on('message_revoke_everyone', async (after, before) => {
    // Fired whenever a message is deleted by anyone (including you)
    console.log(after); // message after it was deleted.
    if (before) {
        console.log(before); // message before it was deleted.
    }
});

client.on('message_revoke_me', async (msg) => {
    // Fired whenever a message is only deleted in your own view.
    console.log(msg.body); // message before it was deleted.
});

client.on('message_ack', (msg, ack) => {
    /*
        == ACK VALUES ==
        ACK_ERROR: -1
        ACK_PENDING: 0
        ACK_SERVER: 1
        ACK_DEVICE: 2
        ACK_READ: 3
        ACK_PLAYED: 4
    */

    if(ack == 3) {
        // The message was read
    }
});

client.on('group_join', (notification) => {
    // User has joined or been added to the group.
    console.log('join', notification);
    notification.reply('User joined.');
});

client.on('group_leave', (notification) => {
    // User has left or been kicked from the group.
    console.log('leave', notification);
    notification.reply('User left.');
});

client.on('group_update', (notification) => {
    // Group picture, subject or description has been updated.
    console.log('update', notification);
});

client.on('change_state', state => {
    console.log('CHANGE STATE', state );
});

// Change to false if you don't want to reject incoming calls
let rejectCalls = true;

client.on('call', async (call) => {
    console.log('Call received, rejecting. GOTO Line 261 to disable', call);
    if (rejectCalls) await call.reject();
    await client.sendMessage(call.from, `[${call.fromMe ? 'Outgoing' : 'Incoming'}] Phone call from ${call.from}, type ${call.isGroup ? 'group' : ''} ${call.isVideo ? 'video' : 'audio'} call. ${rejectCalls ? 'This call was automatically rejected by the script.' : ''}`);
});

client.on('disconnected', (reason) => {
    console.log('Client was logged out', reason);
});

