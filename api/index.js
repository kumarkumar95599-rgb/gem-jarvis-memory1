const express = require("express");
const cors = require("cors");

const memoriesRouter = require("../routes/memories");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Gem Jarvis Memory API Running"
  });
});

app.use("/memories", memoriesRouter);

module.exports = app;
