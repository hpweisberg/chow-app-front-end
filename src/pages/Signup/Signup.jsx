// npm modules
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// components
import { ChoseImage } from '../../components/Icons/Icons'
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
  const [photoData, setPhotoData] = useState({ photo: null })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

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

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className={`${styles.container} mt-20 mx-12`}>
      <h1>Sign Up</h1>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <div className='relative w-[100%] mb-2'>

          <input
            type="text"
            value={name}
            name="name"
            id="name"
            onChange={handleChange}
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
                required
              />
            </label>
          )}
        </div>
        <div>
          <Link to="/">Cancel</Link>
          <button
            className={styles.button}
            disabled={isFormInvalid() || isSubmitted}
          >
            {!isSubmitted ? 'Sign Up' : '🚀 Sending...'}
          </button>
        </div>
      </form>
    </main>
  )
}

export default Signup
