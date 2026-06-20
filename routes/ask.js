const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Ask route working"
  });
});

router.post("/", async (req, res) => {
  res.json({
    success: true,
    message: "Ask route working"
  });
});

module.exports = router;
