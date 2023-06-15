import PostCard from "../../components/PostCard/PostCard";
import styles from "./PostList.module.css";
import PostCardNew from "../../components/PostCardNew";

import Loading from "../Loading/Loading";


const PostList = ({posts}) => {
  console.log('PostList', posts)


  if (!posts) {
    return <Loading />
  }
  return (
    <main className="w-screen border-x-0 ">
      {/* <h1>Posts</h1> */}
      {/* {posts.map((post) => (
        <PostCard key={post._id} post={post} className={styles.postCardContainer} />
      ))} */}
  <PostCardNew />
  <PostCardNew />
  <PostCardNew />
    </main>
  )
}

export default PostList;