const http = require('http'); 
var url = require('url');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
}).listen(8080);

console.log('Server is running on port 8080');
console.log('http://localhost:8080/?year=2017&month=July');
