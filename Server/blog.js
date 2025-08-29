let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors")

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err));

// Simple route
app.get("/", (req, res) => {
  res.send("Blog App Backend Running 🚀");  
});

// Server listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
