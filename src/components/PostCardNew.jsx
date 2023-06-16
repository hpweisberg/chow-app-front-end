import { Link } from "react-router-dom";

const PostCardNew = ({ post }) => {
  console.log('post id:', post)

  return (
    <Link to={`/posts/${post._id}`}>
    <div className="mb-1 overflow-hidden bg-white border border-red-500 rounded-lg shadow-lg max-h-48">
      <div className="flex">
        <div className="w-1/4">
          <img src='https://picsum.photos/500' alt="Restaurant" className="object-cover h-full " />
        </div>
        <div className="w-3/4 p-4">
          <div className="flex justify-between">
            <div className="mb-2">
              <h3 className="text-xl font-bold">Hi-Ho Burgers</h3>
              <p className="text-gray-700">HIHO cheeseburger</p>
            </div>
            <p className="text-gray-700">Dinner</p>
          </div>
          <div className="overflow-auto h-18">
            <p className="text-lg font-bold">5/5</p>
            <p className="overflow-hidden text-gray-700 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis consequuntur possimus non, cum dolor fugiat ut eligendi error libero provident molestias, impedit mollitia facere repellat tempora eos ducimus laborum natus.</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default PostCardNew;