let event = require("events");
let http = require("http");

let e = new event();

e.on("userCreated",(D)=>{
    console.log("Data stored in DB",D);
})

e.on("userCreated",()=>{
    console.log("Welcome mail sended");
})

http.createServer((req,res)=>{

if(req.url == "/signup"){
    e.emit("userCreated",{name:"uma",email:"U@gmail.com",password:"123456789"})
    res.end("Account Created")
}


}).listen(5000,()=>{
    console.log("http://localhost:5000/signup");
})