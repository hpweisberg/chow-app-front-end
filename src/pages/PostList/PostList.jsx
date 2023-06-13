import PostCard from "../../components/PostCard/PostCard";

const PostList = ({posts}) => {
  console.log('PostList', posts)
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post._id} post={post}></PostCard>
      ))}
    </main>
  )
}

export default PostList;