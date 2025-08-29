let path = require ("path");
let http = require("http")
let fs = require("fs");


let D = new Date ();
    let server = http.createServer((req,res)=>{
    let logdata = ` Stock Visited by:  ${D.toLocaleTimeString()} - ${D.getDate()} - ${D.getMonth()+1} - ${D.getFullYear()}- ${req.url}  `
    fs.promises.appendFile(path.join(__dirname,"Url.txt"), `\n${ logdata}`)
    res.end ("Stocks Checking")
})

server.listen(5000,()=>{
    console.log("http://localhost:5000");
    
})

