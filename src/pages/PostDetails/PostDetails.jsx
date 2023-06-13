import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import * as postService from "../../services/postService";


const PostDetails = ({ user }) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.showPost(id);
      setPost(data);
    }
    fetchPost();
  }, [id]);

  console.log('this is the post', post);
  // console.log('this is my new test author:', post.author.name)


  return (
    <main>
      <article>
        <img src={post.photo} alt={post.title} />
        <h3>{post.name}</h3>
        <h3>{post.meal}</h3>
        <h3>{post.review}</h3>
        <h3>{post.title}</h3>
        <h3>{post.rating}</h3>
        <h3>{post.description}</h3>
        {/* <h3>{post.author.name}</h3> */}
        <h3>{post.resturant}</h3>
        {post.author && post.author._id === user.profile &&

          <>
            <Link to={`/posts/${post._id}/edit`}>Edit</Link>
            <button onClick={() => postService.deletePost(id)}>Delete this post</button>
          </>
        }
      </article>
    </main>
  );
}

export default PostDetails;