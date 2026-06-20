const express = require("express");
const router = express.Router();

// GET test route
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Ask route working"
  });
});

// POST ask route
router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    res.json({
      success: true,
      question,
      answer: "Gem AI response will come here"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
