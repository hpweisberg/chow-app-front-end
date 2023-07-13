// services
import * as tokenService from './tokenService'

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



async function showPost(id) {
  try {
    console.log('showPost', id)
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    console.log('showPost', res)
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

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


async function updatePost(formData) {
  try {
    const res = await fetch(`${BASE_URL}/${formData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
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



async function addPhoto(postId, photoData) {
  const res = await fetch(`${BASE_URL}/${postId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData,
  })
  return res.json()
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
  addRestaurant
}
