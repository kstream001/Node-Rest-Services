var Client = require('node-rest-client').Client;
 
var client = new Client();

client.get("http://localhost:8080/api", function(data, response){
            // parsed response body as js object 
           // console.log(data);
            // raw response 
            console.log(response);
           //console.log(response.body);
        });