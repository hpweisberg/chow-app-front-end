// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'
import Button from '../../components/Button/Button'



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

        <input className='p-0 w-full m-1 placeholder:text-sm'

          type="text"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder='Email'
        />
        <input className='m-1 w-full p-0 mt-0 placeholder:text-sm'
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder='Password'
        />
        <div className="container mx-auto">
          <button disabled={isFormInvalid()} className='bg-blue-400 border-2 border-blue-400 rounded-md w-[100%] text-white mt-1 text-sm'>Log in</button>
        </div>

      </form>
    </main>
  )
}

export default LoginPage
