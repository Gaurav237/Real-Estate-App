import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  const query = req.query;
  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || 0,
          lte: parseInt(query.maxPrice) || 100000000,
        },
      },
    });
    // setTimeout(() => {
      res.status(200).json(posts);
    // }, 2000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch posts!" });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch post!" });
  }
};

export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  console.log({ tokenUserId });
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add post!" });
  }
};

export const updatePosts = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post!" });
  }
};

export const deletePosts = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;
  try {
    // find the post
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        postDetail: true,
      },
    });

    // check if post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    // check if post owner is logged-in user
    if (post.userId !== tokenUserId) {
      return res
        .status(403)
        .json({ message: "Not authenticated to delete the post!" });
    }

    // delete the postDetail if it exists
    if (post.postDetail) {
      await prisma.postDetail.delete({
        where: {
          postId: id,
        },
      });
    }

    // delete the post
    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json({ message: "Post and its details deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post!" });
  }
};
