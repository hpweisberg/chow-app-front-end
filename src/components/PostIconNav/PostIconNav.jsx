import { Map, Rows, Meal } from "../../components/Icons/Icons";


const PostIconNav = (props) => {
  return (
    <div className="flex items-center justify-between w-64 py-4">
      <div className="flex items-center justify-between">
        <div className='w-10 h-10'>
          <Rows className='w-full h-full' />
        </div>
        <div className='w-10 h-10'>
          <Meal className='w-full h-full' />
        </div>
        <div className='w-10 h-10'>
          <Map className='w-full h-full' />
        </div>
      </div>
    </div>
  );
}

export default PostIconNav;