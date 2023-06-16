// css
import PostList from '../PostList/PostList'
import PostIconNav from '../../components/PostIconNav/PostIconNav'


const Landing = ({ user, posts }) => {
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
            <PostIconNav />
          </div>
          <PostList posts={posts} />
        </div>
      }
    </main>
  )
}

export default Landing
