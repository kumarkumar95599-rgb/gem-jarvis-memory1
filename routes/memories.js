const express = require("express");
const router = express.Router();
const { db } = require("../lib/firebase");

// GET memories
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("memories").get();

    const memories = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json({
      success: true,
      memories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// POST memory
router.post("/", async (req, res) => {
  try {
    const { memory } = req.body;

    const docRef = await db.collection("memories").add({
      memory,
      createdAt: new Date()
    });

    res.json({
      success: true,
      id: docRef.id
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
router.get("/addtest", async (req, res) => {
  try {
    const docRef = await db.collection("memories").add({
      memory: "My name is Utkarsh",
      createdAt: new Date()
    });

    res.json({
      success: true,
      id: docRef.id
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
