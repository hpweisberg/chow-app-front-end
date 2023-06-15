// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewPost  from './pages/NewPost/NewPost'
import PostDetails from './pages/PostDetails/PostDetails'
import EditPost from './pages/EditPost/EditPost'
import TailwindTest from './pages/TailwindTest/TailwindTest'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'


// styles
import '../src/styles/index.css'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

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

  useEffect(() => {
    const fetchAllPosts = async () => {
      const data = await postService.getAllPosts()
      console.log(data)
      setPosts(data)
    }
    if (user) fetchAllPosts()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} posts={posts} />} />
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
              <PostDetails user={user}/>
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
      </Routes>
      <BottomNavBar user={user} />
    </>
  )
}

export default App
