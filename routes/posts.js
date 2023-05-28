const router = require("express").Router();
const Post = require("../models/Post")
//Create a FoodPost
router.post("/", async (req, res)=>{
   const newPost = new Post(req.body)
   try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
   } catch (err) {
     res.status(500).json(err);
   }
})

// GET all posts

router.get("/recent", async (req, res) => {
   try {
     const posts = await Post.find()
       .sort({ createdAt: -1 }) // Sort by creation date in descending order
       .limit(10); // Retrieve only the 10 most recent posts
     res.status(200).json(posts);
   } catch (err) {
     res.status(500).json({ error: "Failed to fetch recent posts" });
   }
 });

 //GET yourPost history
 router.get("/history/:giverId", async (req, res) => {
  const giverId = req.params.giverId;

  try {
    const posts = await Post.find({ GiverId: giverId }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post history" });
  }
});

module.exports = router;