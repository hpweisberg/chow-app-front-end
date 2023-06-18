import PostCardNew from "../../components/PostCardNew";

import Loading from "../Loading/Loading";


const PostList = ({posts, profile}) => {
  console.log('PostList posts:', posts)
  console.log('Profile PostList posts:', profile)
  // const myPosts = posts.filter(post => post.user. === profile._id)

  // console.log('MyPosts:', myPosts)


  if (!posts && profile) {
    return <Loading />
  }
  return (
    <main className="w-screen border-x-0 ">
      
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