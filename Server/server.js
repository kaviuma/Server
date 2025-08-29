const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB CONNECTED");
})
.catch(()=>{
    console.log("ERROR TO CONNECT DB");
    
})


// Schema + Model
const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: Number,
  department: String,
});
const Employee = mongoose.model("Employee", EmployeeSchema);

// Routes
app.get("/employees", async (req, res) => {
  const data = await Employee.find();
  res.json(data);
});

app.post("/employees", async (req, res) => {
  const data = new Employee(req.body);
  await data.save();
  res.json(data);
});


app.listen(5000,()=>{
    console.log(`http://localhost:5000`);
    
})











































