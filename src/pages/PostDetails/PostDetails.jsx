import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import * as postService from "../../services/postService";


const PostDetails = () => {
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


  return ( 
    <main>
      <article>
        
      </article>
    </main>
   );
}
 
export default PostDetails;