import express from "express";
import { deleteUser, getUser, getUsers, profilePosts, savePost, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js"

const router = express.Router();

router.get("/", getUsers);
// router.get("/:id", verifyToken, getUser);  // conflict & also not in use
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/save", verifyToken, savePost);
router.get("/profilePosts", verifyToken, profilePosts);

export default router;
