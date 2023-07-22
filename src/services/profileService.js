// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}


async function getProfile(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function addPhoto(photoData) {
  try {
    const photoFormData = new FormData();
    photoFormData.append('photo', photoData);
    const profileId = tokenService.getUserFromToken().profile;
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
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

async function updateProfile(profileData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileData.handle}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(profileData),
    });
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
}


async function friendRequests() {
  try {
    const res = await fetch(`${BASE_URL}/requests`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

async function sendFriendRequest(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/send-friend-request`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}


async function acceptFriendRequest(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/accept-friend-request`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (err) {
    throw new Error(err);
  }
}

const rejectFriendRequest = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/reject-friend-request`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const unfriend = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/unfriend`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const friendList = async () => {
  try {
    const res = await fetch(`${BASE_URL}/friends`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const follow = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/follow`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const unfollow = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/unfollow`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const followersList = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/followers`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const followingList = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/following`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const followRequests = async () => {
  try {
    const res = await fetch(`${BASE_URL}/follow-requests`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const acceptFollowRequest = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/accept-follow-request`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

const rejectFollowRequest = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/reject-follow-request`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}



export {
  getAllProfiles,
  addPhoto,
  getProfile,
  friendRequests,
  sendFriendRequest,
  acceptFriendRequest,
  rejectFriendRequest,
  unfriend,
  friendList,
  updateProfile,
  follow,
  unfollow,
  followersList,
  followingList,
  followRequests,
  acceptFollowRequest,
  rejectFollowRequest
}
