import { Post, User } from "./models.js";
import { connectToDb } from "./utils.js";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find({});
    return posts;
  } catch (error) {
    throw new Error('error fetching posts');
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({slug});
    return post;
  } catch (error) {
    throw new Error('Failed to fetch post');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById({id});
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find({});
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
