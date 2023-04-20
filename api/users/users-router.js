const express = require("express");
const {
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/middleware");

const usersController = require("./users-model");
const postsController = require("../posts/posts-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await usersController.get();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "Kullanıcılar alınamadı" });
    next(err);
  }
});

router.get("/:id", validateUserId, async (req, res, next) => {
  try {
    // console.log(req.params);
    // console.log(req.user);
    res.status(200).json(req.user);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "Gönderi bilgisi alınamadı" });
    next(err);
  }
});

router.post("/", validateUser, async (req, res, next) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    const newUser = await usersController.insert({ name });
    // console.log(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "" });
    next(err);
  }
});

router.put("/:id", validateUser, validateUserId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    console.log(req.user);
    const updatedUser = await usersController.update(id, { name });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "" });
    next(err);
  }
});

router.delete("/:id", validateUserId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = req.user;
    await usersController.remove(id);
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "" });
    next(err);
  }
});

router.get("/:id/posts", validateUserId, async (req, res, next) => {
  try {
    const { id } = req.params;
    const userPosts = await usersController.getUserPosts(id);
    res.status(200).json(userPosts);
  } catch (err) {
    console.log(err);
    // res.status(500).json({ message: "" });
    next(err);
  }
});

router.post(
  "/:id/posts",
  validatePost,
  validateUserId,
  async (req, res, next) => {
    try {
      const user_id = req.params.id;
      const { text } = req.body;
      const newPost = await postsController.insert({ user_id, text });
      res.status(201).json(newPost);
    } catch (err) {
      console.log(err);
      // res.status(500).json({ message: "" });
      next(err);
    }
  }
);

module.exports = router;
