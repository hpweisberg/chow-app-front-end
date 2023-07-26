// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'
// import Button from '../../components/Button/Button'



const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <main className={styles.container}>
      {/* <h1>Log In</h1> */}
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form} >
        <div className='relative w-[100%]'>
          <input className='p-0 w-full m-1 placeholder:text-sm peer border-b-2 border-gray-300 text-gray-900 dark:text-gray-600 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent'
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder='Email'
          />
          <label htmlFor="email" className=' absolute left-[8px] -top-3 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:dark:text-dark-txt-200
          peer-placeholder-shown:top-3
          peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-700
          peer-focus:dark:text-dark-txt-100  transition-all
          '>Email</label>
        </div>

        <div className='m-4 relative w-[100%]'>

          <input className='m-1  w-full p-0 mt-0 placeholder:text-sm peer border-b-2 border-gray-300 text-gray-900 dark:text-gray-600 focus:border-rose-600 focus:outline-none mx-auto placeholder-transparent'
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder='Password'
            
          />
          <label htmlFor="password" className=' absolute left-[8px] -top-4 dark:text-dark-txt-100 text-xs peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-placeholder-shown:dark:text-dark-txt-200
          peer-placeholder-shown:top-1
          peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-700
          peer-focus:dark:text-dark-txt-100
          transition-all
          '>Password</label>
        </div>
        <div className="container mx-auto">
          <button tabIndex='0' disabled={isFormInvalid()} className='bg-blue-400 border-2  border-blue-400 rounded-md w-[100%] text-white text-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus-ring-opacity-80 cursor-pointer'>Log in</button>
        </div>

      </form>
    </main>
  )
}

export default LoginPage
