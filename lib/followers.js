//have to poll here
//userid = 143744741; 
module.exports = { 
    init: function(callback){
        var http = require('https');         

        var options = {
            host: 'api.twitch.tv',
            path: '/kraken/channels/143744741/follows',
            method: 'GET',            
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': 'bwmryp5q2iwvupk0uvts14jsi1fhm7'                
            }
        };
                          
        return http.get(options, function (response) {  
            response.setEncoding('utf8')  
            response.on('data', function(data){
                callback(data); 
            }); 
            response.on('end', console.log); 
            response.on('error', console.error); 
          })
    },

    channelID: function(){
        var http = require('http'); 
        http.get()
    }
}


// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Client-ID: bwmryp5q2iwvupk0uvts14jsi1fhm7' \
// -X GET 'https://api.twitch.tv/kraken/channels/143744741/follows'