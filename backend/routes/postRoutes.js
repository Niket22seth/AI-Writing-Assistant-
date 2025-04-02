const express = require("express");
const { getTrendingPosts, getFeed } = require("../controllers/postController");
const router = express.Router();

router.get("/trending", getTrendingPosts);
router.get("/feed", getFeed);

module.exports = router;
