import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as postService from "../../services/postService";



const PostDetailsNew = ({ user }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  
  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.showPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);
  console.log(post)

  return (
    <div>
      <h1>Post Details New</h1>
      {/* <p>User: {user}</p> */}
    </div>
  );
}

export default PostDetailsNew;