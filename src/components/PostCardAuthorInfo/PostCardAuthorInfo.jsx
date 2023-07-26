import { NavLink } from "react-router-dom";



const PostCardAuthorInfo = ({ post, createdAt, handleShowProfile }) => {
  const landingPage = window.location.pathname === "/";

  // console.log(landingPage)
  const authorProfile = post.author;

  
  const handleUserProfileClick = (authorProfile) => {
    handleShowProfile(authorProfile);
    console.log('clicked', authorProfile);
  
  }

  return (
    landingPage ?
      <NavLink to={`/${post.author.handle}`}>
        <div className="relative postCardAuthorInfoColor rounded-t-lg mx-2 shadow-inner ">
          <div className="flex justify-center gap-4 items-center space-x-1 ">
            <div onClick={() => handleUserProfileClick(authorProfile)} className="flex gap-2 justify-center items-center ">
              {post.author?.photo && <img src={post.author.photo} alt="" className="w-5 h-5 my-0.5 rounded-2xl" />}
              {post.author?.name && <p className="text-md font-semibold opacity-75">{post.author.name}</p>}
            </div>
            {/* Temp. Add must have indicator */}
            <p className="h-4">Must have</p>
            <p className="text-primary-200 opacity-50 text-md">{createdAt}</p>
          </div>
        </div>
      </NavLink>
      :
      // The createdAt date should appear on the right side of the component. The text should not extend further left.

      <div className="flex justify-end pr-5">
        <p className="postCardAuthorInfoColor opacity-75 text-md px-3 200 rounded-t-lg">{createdAt}</p>
      </div>
    // <NavLink to={`/${post.author.handle}`}>
    //   <div className="relative bg-red-200 rounded-t-lg mx-5">
    //     <div className="flex justify-center gap-6 items-center space-x-1">
    //       <div className="flex gap-2 justify-center items-center">
    //         {post.author?.photo && <img src={post.author.photo} alt="" className="w-5 h-5 rounded-2xl" />}
    //         {post.author?.name && <p className="text-md font-semibold text-gray-700">{post.author.name}</p>}
    //       </div>
    //       <p className="text-gray-700 opacity-50 text-md">{createdAt}</p>
    //     </div>
    //   </div>
    // </NavLink>
  );
}

export default PostCardAuthorInfo;