// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'
import MealCard from '../../components/MealCard/MealCard'



const Landing = ({ user, posts, handleSort, activeSort }) => {
  console.log('landing posts:', posts)
  return (
    <main className=''>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      {user &&
        <div className='flex flex-col justify-center border border-blue-500' >

          <h3>Post List</h3>
          {/* <h1 className="border-4 border-green-600">
      Hello world!
    </h1>
            <h2 className='text-primary-932'>Howdy World</h2> */}
          <div className='w-full '>
            <PostIconNav handleSort={handleSort} />
          </div>
          {/* <PostList posts={posts} /> */}
          {activeSort === 'rows' && <PostList posts={posts}/>}
      {activeSort === 'meals' &&
        <>
          <MealCard mealName='Breakfast' />
          <MealCard mealName='Lunch' />
          <MealCard mealName='Dinner' />
        </>
      }
      {activeSort === 'map' && <></>}
        </div>
      }
    </main>
  )
}

export default Landing
