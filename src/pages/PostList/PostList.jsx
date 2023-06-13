import PostCard from "../../components/PostCard/PostCard";
import styles from "./PostList.module.css";


const PostList = ({posts}) => {
  console.log('PostList', posts)
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} className={styles.postCardContainer}></PostCard>
      ))}
    </main>
  )
}

export default PostList;