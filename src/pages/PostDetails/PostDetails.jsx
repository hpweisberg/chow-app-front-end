import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as postService from "../../services/postService";
import { Back, PlateRating } from "../../components/Icons/Icons";

import PostDropDown from "../../components/PostDropDown/PostDropDown";
import {
  Breakfast,
  Lunch,
  Dinner,
  Snack,
  Dessert,
  Drink,
  Brunch,
  Other,
} from '../../components/Icons/Icons';

const mealIcons = {
  breakfast: Breakfast,
  lunch: Lunch,
  dinner: Dinner,
  snack: Snack,
  dessert: Dessert,
  drink: Drink,
  brunch: Brunch,
  other: Other,
};



const PostDetails = ({ user, handleShowProfile, handleDeletePost }) => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // const isOwner = user?.handle === post?.author?.handle;


  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.showPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const isAuthor = user && post.author && user.handle === post.author.handle;

  const handleDelete = async () => {
    handleDeletePost(id)
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  // console.log(post.restaurant.restaurantName)
  return (
    <main className="my-20">
      <article className="max-w-lg p-4 pt-1 mx-auto bg-light-background-100 dark:bg-dark-background-300 rounded-lg shadow-lg">
        <div className={`flex items-center mb-0 justify-between ${isAuthor ? '' : 'py-1'}`}>
          <div className="flex items-center">

            <Back onClick={handleBack} className="w-4 h-4 ml-0 mr-2" />
            {post.author && (

              <Link to={`/${post.author.handle}`} onClick={() => handleShowProfile(post.author)} className="flex items-end">
                <img src={post.author?.photo} alt={post?.title} className="w-5 h-5 rounded-full" />
                <h3 className="ml-2 text-1xl font-bold text-center text-light-txt-100 dark:text-dark-txt-100 ">{post.author?.handle}</h3>
              </Link>
            )}
          </div>

          {isAuthor
            &&
            <PostDropDown post={post} handleDelete={handleDelete} />}
        </div>

        <img src={post.photo} alt={post.title} className="w-full mb-4 rounded-lg" />

        <div className=" bg-slate-50 dark:bg-slate-800 shadow-md p-1 rounded-md">

          <div className="flex justify-between">

            <div className="dark:text-gray-200 flex flex-col  w-[70%]">
              {/* <h5 className="" >In-N-Out</h5> */}
              <div className="mb-2">
                <p className="detailsLabel">Meal:</p>
                <h5 className="font-bold text-3xl text-light-txt-100 dark:text-dark-txt-100">{post.name}</h5>
              </div>
              <div className="mb-2">
                <p className="detailsLabel">Resutrant:</p>
                {post.restaurant?.restaurantName ?
                  <h5 className="font-bold text-1xl text-light-txt-100 dark:text-dark-txt-100">{post.restaurant?.restaurantName}</h5>
                  :
                  <p>No restaurant</p>
                }
              </div>
              <div className="mb-2">
                <p className="detailsLabel">Meal type:</p>
                <h5 className="text-light-txt-100 dark:text-dark-txt-100">{post.meal}</h5>
                {/* Meal Icon here */}
              </div>
            </div>

            <div className='flex items-start justify-center dark:text-gray-200'>
              <div className='relative'>
                <PlateRating className='h-24 w-24' />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>
                  {post.rating}
                </p>
              </div>
            </div>

          </div>
          <div>
            <p className="dark:text-gray-200 detailsLabel">Review:</p>
            <h5 className="dark:text-gray-200">{post.review}</h5>
          </div>
        </div>
        {/* <h4 className="mb-4 dark:text-gray-200">Restaurant: {post.restaurant?.restaurantName}</h4>
        <p className="mb-4 dark:text-gray-200">{post.name}</p>
        <p className="mb-4 dark:text-gray-200">{post.review}</p>

        <div className="flex items-center mb-4">
          <span className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded-md">{post.rating}</span>
          <h4 className="text-gray-600">{post.meal}</h4>
        </div> */}
      </article>
    </main>
  );
};

export default PostDetails;
