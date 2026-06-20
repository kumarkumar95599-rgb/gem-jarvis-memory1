const express = require("express");
const router = express.Router();
const { db } = require("../lib/firebase");

router.get("/", async (req, res) => {
  try {
    await db.collection("test").add({
      message: "Gem AI Connected",
      time: new Date()
    });

    res.json({
      success: true,
      message: "Firestore connected successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
