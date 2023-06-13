import PostCard from "../../components/PostCard/PostCard";

const PostList = (props) => {
  console.log('PostList', props)
  return (
    <main>
      <h1>Posts</h1>
      {/* {props.posts.map((post) => (
        <PostCard key={post._id}></PostCard>
      ))} */}
    </main>
  )
}

export default PostList;