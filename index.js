const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const userRoute = require("./routes/users.route");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post.route");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongoDb");
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(`the fucking error is ${error}`);
  }
});

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("backend server running");
});
