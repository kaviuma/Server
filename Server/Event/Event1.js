let server = require ("events");
let http = require ("http");

let e1 = new server();

e1.on("Created",(D1)=>{
    console.log("Data");
})

e1.on("Created",(e)=>{
    console.log("Welcome");
})

http.createServer((req,res)=>{

if(req.url == "/signup1"){
    e1.emit("Created",{name1:"kavi",email:"K@gmail.com"})
    res.end("Complete the Signup")
}


}).listen(5000,()=>{
    console.log("http://localhost:5000/signup1");
})