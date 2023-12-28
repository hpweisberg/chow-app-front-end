// services
import * as tokenService from './tokenService'
// import { addPhoto as addProfilePhoto } from './profileService'


const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function getAllPosts() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function getFriendPosts() {
  try {
    const res = await fetch(`${BASE_URL}/friends`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function getFollowingPosts() {
  try {
    const res = await fetch(`${BASE_URL}/following`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}



async function showPost(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

// ! Good as is
async function createPost(post, photo, restaurant) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
    if (photo) {
      const photoFormData = new FormData()
      photoFormData.append('photo', photo)
      const postId = await res.json()
      const postWithPhoto = await addPhoto(
        postId._id,
        photoFormData,
      )
      return postWithPhoto
    } if (restaurant) {
      const restaurantFormData = new FormData()
      restaurantFormData.append('restaurant', restaurant)
      const postId = await res.json()
      const postWithRestaurant = await addPhoto(
        postId._id,
        restaurantFormData,
      )
      return postWithRestaurant
    } else {
      return await res.json()
    }
  } catch (error) {
    console.log(error)
  }
}

// ! works for text
async function updatePost(formData) {
  try {
    // Create a copy of the formData object to avoid modifying the original object
    const updatedFormData = { ...formData };

    // Remove the photo property from the updatedFormData object
    delete updatedFormData.photo;

    const res = await fetch(`${BASE_URL}/${formData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormData) // Use the updatedFormData without the photo property here
    });

    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}

// ! works for photo
async function updatePhoto(postId, photoData) {
  try {
    const photoFormData = new FormData();
    photoFormData.append('photo', photoData);
    console.log('photoFormData:', photoFormData);
    const res = await fetch(`${BASE_URL}/${postId}/update-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    });
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}



async function deletePost(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}


// ! Good as is for creating new post
async function addPhoto(postId, photoData) {
  try {

    const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData,
    });
  return await res.json();
} catch (err) {
  throw new Error(err);
}

  
// async function addPhoto(photoData) {
//   try {
//     const photoFormData = new FormData();
//     photoFormData.append('photo', photoData);
//     const postId = photoData._id;
//     const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${tokenService.getToken()}`
//       },
//       body: photoFormData,
//     });
//     return await res.json();
//   } catch (err) {
//     throw new Error(err);
//   }
}

async function addRestaurant(postId, restaurantData) {
  const res = await fetch(`${BASE_URL}/${postId}/add-restaurant`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: restaurantData,
  })
  return res.json()
}


export {
  getAllPosts,
  addPhoto,
  createPost,
  showPost,
  updatePost,
  deletePost,
  getFriendPosts,
  addRestaurant,
  getFollowingPosts,
  updatePhoto,
}
