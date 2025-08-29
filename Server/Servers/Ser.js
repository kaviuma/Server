let http = require("http")
let fs = require("fs")

let H = fs.readFileSync("./H.html","utf-8");
let A = fs.readFileSync("./A.html","utf-8");



let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(H)
    }

    else if(req.url == "/A"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(A)
    }
})

server.listen(5000,()=>{
    console.log("http://localhost:5000");
    
})