//oauth:szjdgb1uq0ni0iw1nzyqm333mrhi9n  
//irc.chat.twitch.tv
//6667 
//https://github.com/tmijs/tmi.js
module.exports = {
    
    init: function(){
        const WebSocket = require('ws');
    
        var ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443/irc');
    
        var nick = 'gui_duck'; //all lowercase
        var auth = 'oauth:szjdgb1uq0ni0iw1nzyqm333mrhi9n'; //include oauth:xxxx
        var channel = 'gui_duck';
    
        ws.on('open', function open() {
            ws.send('PASS ' + auth);
            ws.send('NICK ' + nick);
            ws.send('JOIN #' + channel);
        });
    
        //show raw data
        ws.on('message', function(data){
            console.log(data);
            //ws.send('PRIVMSG #' + channel +' :HELLO WORLD'); 
        });
    
        // reply to ping
        ws.on('message', function(data){
            if (data.lastIndexOf('PING', 0) === 0) {
                ws.send('PONG :tmi.twitch.tv');
                console.log('PONG Sent\r\n');
            }    
        });
    
        console.log("asdfadsfadf"); 

        return ws;
    }    
}; 
