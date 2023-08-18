// npm modules
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// components
import { ChoseImage, Back } from '../../components/Icons/Icons'
// services
import * as authService from '../../services/authService'

// css
import styles from './Signup.module.css'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handle: '',
    password: '',
    passwordConf: '',
  })
  // console.log(message)
  const [photoData, setPhotoData] = useState({ photo: null })
  const [isSubmitted, setIsSubmitted] = useState(false)
  // const [focusedField, setFocusedField] = useState(null);


  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  
  const handleBlur = fieldName => {
    // Field validation logic
    if (fieldName === 'passwordConf' && password !== passwordConf) {
      setMessage('Passwords do not match');
    } else if (fieldName === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailRegex)) {
        setMessage('Invalid email address');
      } else {
        setMessage('');
      }
    } else if (fieldName === 'handle') {
      if (handle.length > 15 || /\s/.test(handle)) {
        setMessage('Handle can not have more then 15 characters or spaces.');
      } else {
        setMessage('');
      }
    } else if (fieldName === 'name') {
      if (name.length > 30) {
        setMessage('Name is too long');
      } else {
        setMessage('');
      }
    } else if (fieldName === 'password') {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
      if (!password.match(passwordRegex)) {
        setMessage('Password must contain at least 1 number, 1 capital letter, and 1 special character');
      } else {
        setMessage('');
      }
    }
  };
  

  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)

    // cloudinary supports files up to 10.4MB each as of May 2023
    if (file.size >= 10485760) {
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }

    setMessage(errMsg)

    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }

    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      await authService.signup(formData, photoData.photo)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
      setIsSubmitted(false)
    }
  }

  const { name, email, handle, password, passwordConf } = formData


  // const isFormInvalid = () => {
  //   if (password !== passwordConf) {
  //     setMessage('Passwords do not match');
  //     return true;
  //   }
  // // }
  //   const isFormInvalid = () => {
  //     if (password !== passwordConf) {
  //       setMessage('Passwords do not match');
  //       return true;
  //     }

  //     // Email validation
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     if (!email.match(emailRegex)) {
  //       setMessage('Invalid email address');
  //       return true;
  //     }

  //     // Handle validation
  //     if (handle.length > 15 || /\s/.test(handle)) {
  //       setMessage('Invalid handle');
  //       return true;
  //     }

  //     // Name validation
  //     if (name.length > 30) {
  //       setMessage('Name is too long');
  //       return true;
  //     }

  //     // Password validation
  //     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  //     if (!password.match(passwordRegex)) {
  //       setMessage('Password must contain at least 1 number, 1 capital letter, and 1 special character');
  //       return true;
  //     }

  //     setMessage('');
  //     return false;
  //   };


    return (
      <main className={`${styles.container} mt-20 mx-12`}>
        <div className='grid grid-cols-3 items-center pb-4'>
          <Link to="/">
            <Back className='ml-3 text-slate-50' />
          </Link>
          <h1>Sign Up</h1>
        </div>
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <div className='relative w-[100%] mb-2'>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              onChange={handleChange}
                onBlur={() => handleBlur('name')} // Add this line

              placeholder='name'
              className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent dark:bg-dark-background-200/50'

            />
            <label
              htmlFor='name'
              className={`absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:dark:gray-200 peer-placeholder-shown:top-3 
            peer-focus:-top-3
            focus:border-rose-600 focus:outline-none
            ${name ? '-top-2 text-sm text-gray-700 dark:text-dark-txt-100' : ''
                } transition-all`}>

              Name
            </label>
          </div>
          <div className='relative w-[100%] mb-2'>
            <input
              type="text"
              value={email}
              name="email"
              id="email"
              onChange={handleChange}
                onBlur={() => handleBlur('email')} // Add this line

              placeholder='email'
              className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent dark:bg-dark-background-200/50' />
            <label htmlFor='email'
              className={`absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:dark:gray-200 peer-placeholder-shown:top-3 
            peer-focus:-top-3
            focus:border-rose-600 focus:outline-none
            ${email ? '-top-2 text-sm text-gray-700 dark:text-dark-txt-100' : ''
                } transition-all`}>
              Email
            </label>
          </div>
          <div className='relative w-[100%] mb-2'>
            <input

              type="text"
              value={handle}
              name="handle"
              id="handle"
              onChange={handleChange}
                onBlur={() => handleBlur('handle')} // Add this line

              placeholder='handle'
              className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent dark:bg-dark-background-200/50' />
            <label htmlFor='handle' className={`absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:dark:gray-200 peer-placeholder-shown:top-3 
            peer-focus:-top-3
            focus:border-rose-600 focus:outline-none
            ${handle ? '-top-2 text-sm text-gray-700 dark:text-dark-txt-100' : ''
              } transition-all`}>
              Handle
            </label>
          </div>
          <div className='relative w-[100%] mb-2'>

            <input
              type="password"
              value={password}
              name="password"
              id="password"
              placeholder='password'
              onChange={handleChange}
                onBlur={() => handleBlur('password')} // Add this line

              className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent dark:bg-dark-background-200/50' />
            <label htmlFor='password' className={`absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:dark:gray-200 peer-placeholder-shown:top-3 
            peer-focus:-top-3
            focus:border-rose-600 focus:outline-none
            ${password ? '-top-2 text-sm text-gray-700 dark:text-dark-txt-100' : ''
              } transition-all`}>
              Password
            </label>
          </div>
          <div className='relative w-[100%]'>

            <input
              type="password"
              value={passwordConf}
              name="passwordConf"
              id="passwordConf"
              placeholder='confirm password'
              onChange={handleChange}
                onBlur={() => handleBlur('confirm password')} // Add this line

              className='p-0 m-1 placeholder:text-sm peer border-b-2 border-gray-300 dark:border-gray-900 text-gray-900 dark:text-gray-200 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent dark:bg-dark-background-200/50' />
            <label htmlFor='passwordConf' className={`absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:dark:gray-200 peer-placeholder-shown:top-3 
            peer-focus:-top-3
            focus:border-rose-600 focus:outline-none
            ${passwordConf ? '-top-2 text-sm text-gray-700 dark:text-dark-txt-100' : ''
              } transition-all`}>
              Confirm Password
            </label>
          </div>
          <div className='flex gap-1 justify-center my-2'>
            <label htmlFor="photo"></label>
            {photoData.photo ? (
              <div>
                <div
                  className="photo-preview shadow-lg"
                  style={{ backgroundImage: `url(${URL.createObjectURL(photoData.photo)})` }}
                />
                <button className="photo-clear-btn" onClick={() => setPhotoData({ photo: '' })}>
                  Clear Photo
                </button>
              </div>
            ) : (
              <label htmlFor="photo-input" className="photo-selection shadow-lg">
                <ChoseImage className="plus-icon" />
                <input
                  type="file"
                  id="photo-input"
                  name="photo"
                  accept="image/*"
                  onChange={handleChangePhoto}
                    onBlur={() => handleBlur('email')} // Add this line

                  required
                />
              </label>
            )}
          </div>
          <div className='container mx-auto'>

            <button
              className='bg-blue-400 border-2  border-blue-400 rounded-md w-[100%] text-white text-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus-ring-opacity-80 cursor-pointer'
              disabled={isSubmitted}
            >
              {!isSubmitted ? 'Sign Up' : 'Creating Profile.'}
            </button>
            {message &&
              <p className='text-red-600 w-[300px] p-2'>{message}</p>
            }
          </div>
        </form>
      </main>
    )
  }

  export default Signup
