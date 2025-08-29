let path = require ("path");
let fs = require("fs");
let http = require("http");

let U = new Date ();

let server = http.createServer((req,res)=>{
let Data = ` Shop Visit by User at: ${U.toLocaleTimeString()} - ${U.getDate()} - ${U.getMonth()+1} - ${U. getFullYear()} - ${req.url} `

fs.promises.appendFile(path.join(__dirname,"Path.txt"), `\n${Data}`)
res.end("Shop")


})

server.listen(5000,()=>{
    console.log("http://localhost:5000");
})


























// 
        