const express = require("express");
 const mongoose = require("mongoose");
const cors = require("cors");
 const postRoutes = require("./controller/blog.controller");
 const app = express();
app.use(cors());
 app.use(express.json());

 mongoose
   .connect("mongodb+srv://kaviuma:kaviuma@cluster0.iavsjhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.log(err));

  app.use("/posts", postRoutes);

 app.listen(5000, () => console.log("Server running on port 5000"));
