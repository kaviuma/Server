import express from "express";
import User from "../model/my.model";

const router = express.Router();

// Signup
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.json({ msg: "User already exists ❌" });
      }

      User.create({ name, email, password })
        .then(() => res.json({ msg: "User registered ✅" }))
        .catch((err) => res.json({ msg: "Error creating user ❌", error: err.message }));
    })
    .catch((err) => res.json({ msg: "Error checking user ❌", error: err.message }));
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.json({ msg: "User not found ❌" });
      }

      if (user.password !== password) {
        return res.json({ msg: "Wrong password ❌" });
      }

      res.json({ msg: "Login successful ✅", user });
    })
    .catch((err) => res.json({ msg: "Error in login ❌", error: err.message }));
});

export default router;
