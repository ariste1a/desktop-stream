//have to poll here
//userid = 143744741; 
var http = require('https'); 
var lastDate = null; 

var options = {
    host: 'api.twitch.tv',
    path: '/kraken/channels/143744741/follows',
    method: 'GET',            
    headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Client-ID': 'bwmryp5q2iwvupk0uvts14jsi1fhm7'                
    }
};

function getFollowers(callback){                     
                        
    http.get(options, function (response) {  
        response.setEncoding('utf8')  
        response.on('data', function(data){
            callback(JSON.parse(data)); 
            //console.log(data); 
        }); 
    });
}

module.exports = { 
    init: function(callback){                                                      
        this.poll();        
    },

    poll: function(callback){
        var task_is_running = false;
        var time_interval_in_miliseconds = 500; 
        setInterval(function(){
            if(!task_is_running){
                console.log("polling"); 
                task_is_running = true;
                getFollowers(function(result){
                    lastDate = result.follows[0].created_at;
                    console.log(lastDate);
                    task_is_running = false;
                });
            }
        }, time_interval_in_miliseconds);
    }    
}


// curl -H 'Accept: application/vnd.twitchtv.v5+json' \
// -H 'Client-ID: bwmryp5q2iwvupk0uvts14jsi1fhm7' \
// -X GET 'https://api.twitch.tv/kraken/channels/143744741/follows'