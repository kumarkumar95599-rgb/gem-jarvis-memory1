const express = require("express");
const cors = require("cors");

const memoriesRouter = require("../routes/memories.js");
const askRouter = require("../routes/ask.js");

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
app.use("/ask", askRouter);

module.exports = app;
