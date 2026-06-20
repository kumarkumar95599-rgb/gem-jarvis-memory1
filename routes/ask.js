const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    success: true,
    message: "Ask route working"
  });
});

module.exports = router;
