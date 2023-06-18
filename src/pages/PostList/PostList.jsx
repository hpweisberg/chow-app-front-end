import PostCardNew from "../../components/PostCardNew";

import Loading from "../Loading/Loading";


const PostList = ({posts}) => {
  console.log('PostList posts:', posts)


  if (!posts) {
    return <Loading />
  }
  return (
    <main className="w-screen border-x-0 ">
      {/* <h1>Posts</h1> */}
      {posts.map((post) => (
        <PostCardNew key={post._id} post={post} />
      ))}
  {/* <PostCardNew />
  <PostCardNew />
  <PostCardNew />
  <PostCardNew />
  <PostCardNew />
  <PostCardNew /> */}
    </main>
  )
}

export default PostList;