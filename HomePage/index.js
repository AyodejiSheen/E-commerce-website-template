const fs = require('fs');
const http = require('http');
const url = require('url');

// to read the json file.
//const json = fs.readFileSync('${__dirname}/data/data.json', utf-8);

//to convert json file to javascript object.
//const storeData = JSON.parse(json);


//to create serve using the http method
const server = http.createServer ((req, res) => {

    console.log(req);

    //setting http header and to let brower know the type of data we are sendng
    res.writeHead(200, {'Content-type': 'text/html'});
   
   //to send response when someone access the server.
   res.end('This is the response');
   
   ////to know is the server is working use the below;
    // console.log('someone access the server!');

});


//to know or listen if server is been accessed
server.listen(1337, '127.0.0.1', () =>{
    console.log('listerning for requests now');
})