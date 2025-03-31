const http = require('http');
const os = require('os');
const fs = require('fs');
const url = require('url');
function handleIndex(){
    data = fs.readFileSync(__dirname + '/index.html', 'utf8');
    return data;
} 

function handleInfo(){
    data = {
        "platform": os.platform(),
        "totalmem": os.totalmem(),
        "freemem": os.freemem(),
        "uptime": os.uptime()
    }
    return JSON.stringify(data);
}

function handleDetail(filename){
    try{
        data = fs.readFileSync(__dirname + '/data/' + filename, 'utf8');
        console.log(__dirname + '/data/' + filename);
        return data;
    }
    catch(err){
        return 'Not Found';
    }
}

const server = http.createServer((req, res) => {
    
    var urll = url.parse(req.url, true);
    var index = handleIndex();
    var info = handleInfo();
    if(urll.pathname == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(index);
    }
    else if(urll.pathname == '/info'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(info);
    } 
    else if(urll.pathname == '/read'){
        if(!urll.query.filename){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Not Found');
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            var detail = handleDetail(urll.query.filename);
            res.write(detail);
        }
    }
    res.end();
}).listen(8080);




