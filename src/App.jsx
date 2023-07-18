// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'

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
import FriendRequests from './pages/FriendRequests/FriendRequests'
import Search from './pages/Search/Search'

// components
// import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'

// services
import * as authService from './services/authService'
import * as postService from './services/postService'
import * as profileService from './services/profileService'


// styles
import '../src/styles/index.css'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'
import FriendList from './pages/FriendList/FriendList'
import NotificationsPage from './pages/NotificationsPage/NotificationsPage'
import EditProfile from './pages/EditProfile/EditProfile'
import RestaurantSearch from './components/RestaurantSearch/RestaurantSearch'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [userProfile, setUserProfile] = useState(null)
  const [posts, setPosts] = useState([])
  // const [logedInUser, setLogedInUser] = useState('')
  const [profile, setProfile] = useState(null)
  const [activeSort, setActiveSort] = useState('rows')
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const { id } = useParams();
  // console.log('app lvl logedInUser: ',logedInUser)
  // console.log('app lvl profile: ',profile)
  // console.log('user: ',user)
  console.log('posts3: ', posts)
  // console.log('profile: ', profile)

  // ! user profile

  useEffect(() => {
    if (user) {
      profileService.getProfile(user.handle)
        .then(profile => {
          setUserProfile(profile)
          // setProfile(profile)
        })
    }
  }, [user])
  // console.log('useEffect Profile: ', userProfile)

  // ! User Feed aka friends posts
  const handleSetFriendsPosts = async () => {
    try {
      const friendsPosts = await postService.getFriendPosts();
      // console.log('friendsPosts: ', friendsPosts)

      // const friendPosts = friendsPosts.filter(post => {
      //   return post.author.handle === user.handle
      // })
      setPosts(friendsPosts);
      setActiveSort('rows')
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (user) {
      handleSetFriendsPosts();
    }
  }, [user])



  // ! Update Profile State/ Show profile


  const handleShowProfile = async (profile) => {
    const profileData = await profileService.getProfile(profile.handle)
    setProfile(profileData)
    setPosts(profileData.posts)
    setActiveSort('rows')
    // console.log('profileData: ', profileData)
    // console.log('profileData.posts: ', profileData.posts)
  };


  // ! posts

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (search.length === 0) return setSearchResults([]);
        const profiles = await profileService.getAllProfiles();
        const filteredResults = profiles.filter((profile) => {
          // console.log('profile4: ',profile)
          // console.log('user4: ',user)
          const name = profile.name.toLowerCase();
          const searchQuery = search.toLowerCase();
          return name.startsWith(searchQuery) && profile.name !== user.name;
        });
        setSearchResults(filteredResults);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchResults();
  }, [search, user]);


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


  return (
    <div className='flex flex-col min-h-screen'>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      {user &&
        <HeaderComponent handleSetFriendsPosts={handleSetFriendsPosts} />}
      <div className='flex-grow overflow-y-auto'>
        <Routes>
          <Route path="/" element=
            {<Landing
              user={user}
              posts={posts}
              handleSort={handleSort}
              activeSort={activeSort}
              // // filteredPosts={filteredPosts}
              // handleMealCardClick={handleMealCardClick}
              profile={profile}
              handleLogout={handleLogout}
              handleAuthEvt={handleAuthEvt} />}
          />
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
                <PostDetails user={user} handleShowProfile={handleShowProfile} />
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
            path="/:id"
            element={
              <ProtectedRoute user={user}>
                <Profile user={user} handleSort={handleSort} activeSort={activeSort} profile={profile} handleLogout={handleLogout}
                  posts={posts} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friend-requests"
            element={
              <ProtectedRoute user={user}>
                <FriendRequests user={user} profile={profile} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:id/friendsList"
            element={
              <ProtectedRoute user={user}>
                <FriendList profile={profile} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute user={user}>
                <Search search={search} searchResults={searchResults} handleSearch={handleSearch} profile={profile} handleLogout={handleLogout} handleShowProfile={handleShowProfile} user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute user={user}>
                <NotificationsPage profile={profile} user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurantSearch"
            element={
              <ProtectedRoute user={user}>
                <RestaurantSearch profile={profile} user={user} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute user={user}>
                <EditProfile profile={profile} user={user} />
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
      {user &&
        <BottomNavBar user={userProfile} handleShowProfile={handleShowProfile} handleSetFriendsPosts={handleSetFriendsPosts} />
      }
    </div>
  )
}

export default App
