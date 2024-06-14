import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch users!" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch user!" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if (id !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized to Update!" });
    }

    // if password is updated, then hash it
    let updatedPassword = null;
    if (password && password !== "") {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }), // only update if its not empty string("")
        ...(avatar && { avatar: avatar }), // only update if its not empty field
      },
    });

    // remove password and send the object
    const { password: userPassword, ...exceptPasswordData } = updatedUser;
    res.status(200).json(exceptPasswordData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update user!" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const tokenUserId = req.userId;

    if (id !== tokenUserId) {
      return res.status(403).json({ message: "Not Authorized to Delete!" });
    }

    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete user!" });
  }
};

export const savePost = async (req, res) => {
  try {
    const tokenUserId = req.userId;
    const postId = req.body.postID;

    // search if it's already saved
    const svdPost = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: tokenUserId,
          postId: postId,
        },
      },
    });

    // if it's already saved, then delete it
    if (svdPost) {
      await prisma.savedPost.delete({
        where: {
          id: svdPost.id,
        },
      });

      res.status(200).json({ message: "Post removed from saved list!" });
    } else {
      // does not exist
      await prisma.savedPost.create({
        data: {
          userId: tokenUserId,
          postId: postId,
        },
      });

      res.status(200).json({ message: "Post added to saved list" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to save post!" });
  }
};
