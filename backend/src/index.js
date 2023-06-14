const express = require("express");
const path = require("path");
const app = express();
const port = 4000;
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("안녕하세요!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("몽고 DB연결 에러", err);
  });

app.use(express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`${port}번에서 서버가 실행되었습니다.`);
});
