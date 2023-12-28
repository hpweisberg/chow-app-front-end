// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import NewPost from './pages/NewPost/NewPost'
import PostDetails from './pages/PostDetails/PostDetails'
import EditPost from './pages/EditPost/EditPost'
import Profile from './pages/Profile/Profile'
import FriendRequests from './pages/FriendRequests/FriendRequests'
import Search from './pages/Search/Search'
import FollowersPage from './pages/FollowersPage/FollowersPage'
import FollowingPage from './pages/FollowingPage/FollowingPage'

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
  const [theme, setTheme] = useState(null);
  const [darkEnabled, setDarkEnabled] = useState(false)
  const [followerList, setFollowers] = useState([])
  
  // ! hide nav bar on routes:
  const location = useLocation()

  const hiddenRoutes = ['/posts/new', `/${profile?.handle}/edit-profile`]

  const isHiddenRoute = hiddenRoutes.includes(location.pathname);


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

  // ! User Feed aka follow posts
  const handleSetFollowingPosts = async () => {
    try {
      const followingPosts = await postService.getFollowingPosts();
      // console.log('friendsPosts: ', friendsPosts)

      // const friendPosts = friendsPosts.filter(post => {
      //   return post.author.handle === user.handle
      // })
      // console.log('i have posts:', followingPosts )
      setPosts(followingPosts);
      setActiveSort('rows')
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (user) {
      handleSetFollowingPosts();
    }
  }, [user])


  // ! Update Profile State/ Show profile
  const handleShowProfile = async (profile) => {
    if (!profile) {
      // Handle the case when the profile is null or undefined
      console.log("Profile is null or undefined.");
      return;
    }
    const profileData = await profileService.getProfile(profile.handle);
    setProfile(profileData);

    const isOwnProfile = profile.handle === user.handle; // Compare with user.handle, not userProfile.handle

    if (isOwnProfile) {
      // If it's your own profile, set the posts as usual
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
      setActiveSort('rows');
    } else {
      // If it's not your own profile, check if the profile has followPublic set to true
      if (profileData.followPublic === true) {
        // If followPublic is true, set the posts as usual
        const reversedPosts = [...profileData.posts].reverse();
        setPosts(reversedPosts);
        setActiveSort('rows');
      } else {
        // If followPublic is false, check if the userProfile is already following the profile
        const isFollowing = userProfile.following.includes(profileData.handle);

        // If userProfile is already following, set the posts as usual
        if (isFollowing) {
          const reversedPosts = [...profileData.posts].reverse();
          setPosts(reversedPosts);
          setActiveSort('rows');
        } else {
          // If userProfile is not following, set the posts to an empty array
          setPosts([]);
        }
      }
    }
  };


  //! THIS IS FOR PROFILE BTN PRESSES

  const handleShowProfileRefresh = async (profile) => {
    const profileData = await profileService.getProfile(profile.handle);
    setProfile(profileData);

    // Check if the profile has followPublic set to true
    if (profileData.followPublic === true) {
      // If followPublic is true, set the posts as usual
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
    } else {
      // If followPublic is false, check if the userProfile is already following the profile
      // const userProfile = await profileService.getProfile(user.handle);
      const isFollowing = userProfile.following.includes(profileData.handle);
      // setPosts([]);

      // If userProfile is already following, set the posts as usual
      if (isFollowing) {
        const reversedPosts = [...profileData.posts].reverse();
        setPosts(reversedPosts);
      } else {
        // If userProfile is not following, set the posts to an empty array
        setPosts([]);
      }
    }
  };



  // ! posts

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // ! Search input

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (search.length === 0) return setSearchResults([]);

        const profiles = await profileService.getAllProfiles();
        const filteredResults = profiles.filter((profile) => {
          const name = profile?.name?.toLowerCase() ?? '';
          const handle = profile?.handle?.toLowerCase() ?? '';
          const searchQuery = search.toLowerCase();
          return name.startsWith(searchQuery) || handle.startsWith(searchQuery);
        });
        setSearchResults(filteredResults);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSearchResults();
  }, [search]);



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

  // ! Might not be needed
  const handleAddPost = async (postData) => {
    setPosts([postData, ...posts])
    navigate(`/${user.handle}`);
  }

  // ! works as is for text
  const handleUpdatePost = async (postData) => {
    try {
      const updatedPost = await postService.updatePost(postData);
      // if (selectedPhoto) {
      //   await handleUpdatePostPhoto(postData, selectedPhoto);
      // }
      setPosts(posts.map((post) => (post._id === updatedPost._id ? updatedPost : post)));
      return updatedPost
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  const handleUpdatePostPhoto = async (postId, selectedPhoto) => {
    try {
      await postService.updatePhoto(postId, selectedPhoto);
    } catch (error) {
      console.log('Error updating photo:', error);
    }
  };
  
  
  

  const handleDeletePost = async (postId) => {
    const deletedPost = await postService.deletePost(postId)
    setPosts(posts.filter((post) => post._id !== deletedPost._id))
    navigate(`/${user.handle}`)
  }

  // !REFRESH PROFILE
  const handleDirectProfileNavigationOrRefresh = async (profile) => {
    const isFollowing = userProfile?.following.includes(profile.handle);
    const profileData = await profileService.getProfile(profile.handle);
    setProfile(profileData);

    if (profileData.followPublic === true) {
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
    }
    if (isFollowing) {
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
    }
    if (profileData.followPublic === false && isFollowing) {
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
    }

    if (profileData.followPublic === false && !isFollowing && userProfile.handle !== profile.handle) {
      setPosts([])
    }

    if (profileData.followPublic === false && !isFollowing && userProfile.handle === profile.handle) {
      const reversedPosts = [...profileData.posts].reverse();
      setPosts(reversedPosts);
    }
  }


  // ! Follower functions
  const followThisProfile = async (profile) => {
    const updatedProfile = await profileService.follow(profile.handle);
    handleShowProfileRefresh(updatedProfile); // Update the profile after follow
  };

  // Function to unfollow a profile
  const unfollowThisProfile = async (profile) => {
    const updatedProfile = await profileService.unfollow(profile.handle);
    handleShowProfileRefresh(updatedProfile); // Update the profile after unfollow
  };

  // Function to accept a follow request
  const acceptFollowRequest = async (profile) => {
    const updatedProfile = await profileService.acceptFollowRequest(profile.handle);
    handleShowProfileRefresh(updatedProfile); // Update the profile after accepting follow request
  };

  // Function to reject a follow request
  const rejectFollowRequest = async (profile) => {
    const updatedProfile = await profileService.rejectFollowRequest(profile.handle);
    handleShowProfileRefresh(updatedProfile); // Update the profile after rejecting follow request
  };

  // ! update Profile
  const handleUpdateProfile = async (profileData) => {
    try {
      const updatedProfile = await profileService.updateProfile(profileData);
      // if (profileData.photo) {
      //   handleUpdateProfilePhoto(profileData);
      // }
      setUserProfile(updatedProfile);
      return updatedProfile
    } catch (error) {
      console.log('Error:', error);
    }

  };
  
  const handleUpdateProfilePhoto = async (profileId, selectedPhoto) => {
    try {
      await profileService.updateProfilePhoto(profileId, selectedPhoto);
    } catch (error) {
      console.log('Error updating photo:', error);
    }
  }

  const updateProfileAfterChange = async (profileData) => {
    try {
      setProfile(profileData);
    } catch (error) {
      console.log('Error updating photo:', error);
    }
  }

  // ! Dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      setDarkEnabled(true);
    } else {
      setTheme('light');
      setDarkEnabled(false);
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkEnabled(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkEnabled(false);
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }



  return (
    <div className='flex flex-col bg-slate-50 dark:bg-slate-800 overflow-scroll-x-hidden'>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      {user &&
        <HeaderComponent handleSetFollowingPosts={handleSetFollowingPosts}handleThemeSwitch={handleThemeSwitch} darkEnabled={darkEnabled}/>}
      <div className='flex-grow overflow-y-auto overflow-scroll-hidden '>
        <Routes>
          <Route path="/" element=
            {<Landing
              key={userProfile?.handle ?? "landing"} // Use a unique key, userProfile.handle might be null initially

              user={user}
              posts={posts}
              handleSort={handleSort}
              activeSort={activeSort}
              // // filteredPosts={filteredPosts}
              // handleMealCardClick={handleMealCardClick}
              profile={profile}
              handleLogout={handleLogout}
              handleAuthEvt={handleAuthEvt}
              handleShowProfile={handleShowProfile}
              darkEnabled={darkEnabled} 
              userProfile={userProfile}/>}
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
          {/* <Route
            path="/auth/login"
            element={<Login handleAuthEvt={handleAuthEvt} />}
          /> */}
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
                <NewPost handleAddPost={handleAddPost} user={user} handleShowProfile={handleShowProfile} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id/edit"
            element={
              <ProtectedRoute user={user}>
                <EditPost handleUpdatePost={handleUpdatePost} userProfile={userProfile} handleUpdatePostPhoto={handleUpdatePostPhoto}  />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:id"
            element={
              <ProtectedRoute user={user}>
                <PostDetails user={user} handleShowProfile={handleShowProfile} handleDeletePost={handleDeletePost} />
              </ProtectedRoute>
            }
          />


          <Route
            path="/:id"
            element={
              <ProtectedRoute user={user}>
                <Profile
                  user={user}
                  handleSort={handleSort}
                  activeSort={activeSort}
                  profile={profile}
                  handleLogout={handleLogout}
                  posts={posts}
                  handleDirectProfileNavigationOrRefresh={handleDirectProfileNavigationOrRefresh}
                  userProfile={userProfile}
                  followThisProfile={followThisProfile}
                  unfollowThisProfile={unfollowThisProfile}
                  acceptFollowRequest={acceptFollowRequest}
                  rejectFollowRequest={rejectFollowRequest}
                  darkEnabled={darkEnabled}
                />
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
            path="/:handle/followers-list"
            element={
              <ProtectedRoute user={user}>
                <FollowersPage profile={profile} handleShowProfile={handleShowProfile}/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/:handle/following-list"
            element={
              <ProtectedRoute user={user}>
                <FollowingPage profile={profile} handleShowProfile={handleShowProfile}/>
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
            path="/:handle/edit-profile"
            element={
              <ProtectedRoute user={user}>
                <EditProfile profile={profile} user={user} handleUpdateProfile={handleUpdateProfile} handleUpdateProfilePhoto={handleUpdateProfilePhoto} updateProfileAfterChange={updateProfileAfterChange}/>
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
      {user && !isHiddenRoute &&
        <BottomNavBar user={userProfile} handleShowProfile={handleShowProfile} handleSetFollowingPosts={handleSetFollowingPosts} userProfile={userProfile} 
        darkEnabled={darkEnabled}
        />
      }
    </div>
  )
}

export default App
