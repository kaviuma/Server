let express =  require ("express");
let mongoose = require("mongoose");


let app = express();

mongoose.connect("mongodb+srv://kaviuma730:umakavi@730@cluster0.iavsjhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB cONNECTED");
})
.catch(()=>{
    console.log("ERROR TO CONNECT DB");
    
})



app.listen(5000,()=>{
    console.log("http://localhost:5000");
    
})