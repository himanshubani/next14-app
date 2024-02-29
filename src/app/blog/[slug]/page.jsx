import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
// import PostUser from "@/components/postUser/postUser";
// import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/nigga.webp" alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
            <Image className={styles.avatar} src='/nigga.webp' width={50} height={50} alt=""/>
            <PostUser userId={post.userId}/>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>29.Feb.2024</span>
            </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
