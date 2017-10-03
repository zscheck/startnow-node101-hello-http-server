// write your code here
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});//200 means successful
    //content type: means we are doing the website in text
    response.write("Hello World");
    response.end();//cant send anymore after end.
}).listen(8080);