const express = require("express");
const router = express.Router();
const Post = require("../model/blog.model");

// // Create
 router.post("/", async (req, res) => {
   try {
     const post = new Post(req.body);
     const saved = await post.save();
     res.json(saved);
   } catch (err) {
     res.status(500).json(err);
   }
 });


// Read all
 router.get("/", async (req, res) => {
   const posts = await Post.find();
   res.json(posts);
 });


// Read one
 router.get("/:id", async (req, res) => {
   const post = await Post.findById(req.params.id);
   res.json(post);
});

//  // Update
 router.put("/:id", async (req, res) => {
   const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
   res.json(updated);
 });

// // Delete
 router.delete("/:id", async (req, res) => {
   await Post.findByIdAndDelete(req.params.id);
   res.json({ msg: "Deleted" });
 });

 module.exports = router;
