// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewPost from './pages/NewPost/NewPost'
import PostDetails from './pages/PostDetails/PostDetails'
import EditPost from './pages/EditPost/EditPost'
import TailwindTest from './pages/TailwindTest/TailwindTest'
import Profile from './pages/Profile/Profile'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'


// styles
import '../src/styles/index.css'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const [profile, setProfile] = useState('')
  const navigate = useNavigate()
  const [activeSort, setActiveSort] = useState('rows')
  const [filteredPosts, setFilteredPosts] = useState(posts);



  const fetchAllPosts = async () => {
    const data = await postService.getAllPosts()
    // console.log(data)
    setPosts(data)
  }


  const handleSort = (sort) => {
    setActiveSort(sort)
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (postData) => {
    const newPost = await postService.createPost(postData)
    setPosts([newPost, ...posts])
    navigate('/')
  }

  const handleUpdatePost = async (postData) => {
    const updatedBlog = await postService.updatePost(postData)
    setPosts(posts.map((post) => (post._id === updatedBlog._id ? updatedBlog : post)))
    navigate('/posts/:id')
  }

  const handleMealCardClick = (mealName) => {
    setActiveSort(mealName);
    if (mealName === 'rows') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.mealName === mealName);
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await profileService.getProfile(user.profile)
      console.log('profile:: ',profile)
      setProfile(profile)
  }
  if (user) fetchProfile()
}, [user])

  useEffect(() => {
    if (user) fetchAllPosts()
  }, [user, setPosts])


  return (
    <div className='flex flex-col min-h-screen'>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <HeaderComponent />
      <div className='flex-grow overflow-y-auto'>
        <Routes>
          <Route path="/" element=
            {<Landing user={user} posts={posts} handleSort={handleSort} activeSort={activeSort} filteredPosts={filteredPosts} handleMealCardClick={handleMealCardClick} />} />
          <Route
            path="/profiles"
            element={
              <ProtectedRoute user={user}>
                <Profiles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/auth/signup"
            element={<Signup handleAuthEvt={handleAuthEvt} />}
          />
          <Route
            path="/auth/login"
            element={<Login handleAuthEvt={handleAuthEvt} />}
          />
          <Route
            path="/auth/change-password"
            element={
              <ProtectedRoute user={user}>
                <ChangePassword handleAuthEvt={handleAuthEvt} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/new"
            element={
              <ProtectedRoute user={user}>
                <NewPost handleAddPost={handleAddPost} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id/edit"
            element={
              <ProtectedRoute user={user}>
                <EditPost handleUpdatePost={handleUpdatePost} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <ProtectedRoute user={user}>
                <PostDetails user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute user={user}>
                <TailwindTest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} handleSort={handleSort} activeSort={activeSort} posts={posts} profile={profile}/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <BottomNavBar user={user} profile={profile}/>
    </div>
  )
}

export default App
