import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <PostCard post={{ title: "Post 1", body: "Post 1 body" }} />
      <PostCard post={{ title: "Post 1", body: "Post 1 body" }} />
      <PostCard post={{ title: "Post 1", body: "Post 1 body" }} />
      <PostCard post={{ title: "Post 1", body: "Post 1 body" }} />
      <PostCard post={{ title: "Post 1", body: "Post 1 body" }} />
    </div>
  );
};

export default BlogPage;
