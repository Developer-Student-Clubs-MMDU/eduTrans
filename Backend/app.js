const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const userRouter = require("./router/user.router");
const videoRouter = require("./router/video.router");

require("dotenv").config();

const app = express();
// mongoose
//   .connect(process.env.mongodbURI)
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
mongoose
  .connect(process.env.mongodbURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/video", videoRouter);

// app.use((req, res) => {
//   res.status(404).json({
//     message: "page not found",
//   });
// });

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(3333, () => {
  console.log(`App is running at 3333`);
});
