const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("./models/User");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();

mongoose.connect("mongodb://localhost:27017/LoginUsers");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const generateOTP = () => {
  return crypto.randomBytes(3).toString("hex");
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "suryakenguva143@gmail.com",
    pass: "vvdl hgzg ppcz jizm",
  },
});

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const otp = generateOTP();
    user.resetOTP = otp;
    user.resetExpires = new Date(Date.now() + 1160000);
    await user.save();

    const mailOptions = {
      from: "suryakenguva143@gmail.com",
      to: user.email,
      subject: "Your Password Reset OTP",
      text: `Your OTP for Password Reset is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "OTP sent successfully" });
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/reset-password", async (req, res) => {
  const { email, otp, newPassword } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.resetOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.resetExpires.getTime() < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOTP = undefined;
    user.resetExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/home", (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "surya@9182", (err, decoded) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json({
          status: "success",
          name: decoded.name,
          role: decoded.role,
        });
      }
    });
  }
});
app.get("/dashboard", async (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "surya@9182", async (err, decoded) => {
      if (err) {
        return res.json(err);
      } else {
        if (decoded.role !== "admin") {
          return res.status(403).json({ error: "unauthorized" });
        } else {
          const users = await userModel.find({}, "name email role");
          return res.json({ status: "success", name: decoded.name, users });
        }
      }
    });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    res.json("success");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              { email: user.email, name: user.name, role: user.role },
              "surya@9182",
              { expiresIn: "7d" }
            );
            res.cookie("token", token);
            return res.json({
              status: "success",
              role: user.role,
              name: user.name,
            });
          } else {
            return res.status(401).json({ error: "Incorrect Password" });
          }
        });
      } else {
        return res.status(404).json({ error: "User not existed" });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ status: "success" });
});

app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    await userModel.deleteOne({ _id: userId });
    res.json({ message: "User deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "failed to delete user" });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Role updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Failed to update user role:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(8000, () => console.log("server is running on 8000"));
