import { useState } from 'react';
import Button from "../../components/Button/Button";
import { Map, Rows, Meal } from "../../components/Icons/Icons";
import PostIconNav from '../../components/PostIconNav/PostIconNav';

const Profile = ({ user }) => {
  const [activeSort, setActiveSort] = useState('rows')

  return (
    <main className="container flex flex-col items-center justify-center">
      <div className="flex justify-center gap-3 flex-nowrap">
        <div>
          <img className="h-40 border-4 border-black rounded-full" src="https://picsum.photos/500" alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold" >
            {user.name}
          </h1>
          <div className="flex flex-row justify-center gap-3">

            <div className="flex flex-col items-center justify-center">
              <p>99</p>
              <p>Posts</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>393</p>
              <p>Followers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>492</p>
              <p>Following</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <Button btnText={'Edit profile'} />
            <Button btnText={'Share profile'} />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-64 py-4'>
        <PostIconNav />
      </div>
    </main>
  );
}

export default Profile;
