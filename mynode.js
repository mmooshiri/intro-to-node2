var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT=process.env.PORT || 5000
http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    console.log(fileName);
    if (fileName == "./") {
        fileName = './index';

    }
    fileName = fileName + ".html";

    fs.readFile(fileName, function(err, data) {
        if (err) {
            res.writeHead(404, { 'content-Type': 'text/html' });
            return res.end("404 not found")
        }
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(data);
        console.log("....incoming request.." + req.url);
        return res.end();
    })






}).listen(PORT);

console.log("server is listening to port 8080............");