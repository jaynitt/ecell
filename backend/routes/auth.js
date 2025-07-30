import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.js";



//register
router.post("/register", async (req, res) => {

  const { name, email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) { return res.json({ msg: "user already exists" }) }
    const hashed = await bcrypt.hash(password, 10)
    const newuser = new User({ name, email, password: hashed })
    await newuser.save()

    res.json({ msg: "user registered" })
  } catch (error) {
    console.log(error)
    res.json({ msg: "can't register" })

  }

})

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({msg:"login successfull", token });
  } catch (err) {
  console.log(err)
    res.json({ msg: "error in backend" })
  }
});


export default router;
