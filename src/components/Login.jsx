import { useState } from "react"
import SignIn from "./SignIn"
import Button from "./Button"
import Error from "./Error"

const Login = ({showModal, setShowModal, error, setError}) => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(user).includes('')) {
      setError(!error)
    } else {
      setUser({
        email: '',
        password: ''
      })
    }
  }


  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={`${showModal && "hidden"} flex flex-col gap-1.5 bg-white px-7 py-8 rounded-lg shadow-lg w-100`}>
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-3xl text-center mb-0.5">Welcome Back!</h1>
        <p className="text-sm text-gray-500 text-center">Please enter your details to sign in</p>
      </div>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
          <label htmlFor="email" className="flex flex-col font-semibold gap-0.5">Email
            <input onChange={handleChange} name="username" value={user.email} type="text" placeholder="Enter your email" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"/>
          </label>
          <label htmlFor="password" className="flex flex-col font-semibold gap-0.5">Password
            <input onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"/>
          </label>
            <div className="flex justify-between items-center">
              <label htmlFor="remember" className="flex gap-2 font-normal text-sm items-center">
                <input type="checkbox" name="remember" id="remember" />
                Remember me
              </label>
              <span className="text-center text-sm text-gray-500 mt-2 hover:text-blue-500 cursor-pointer">Forgot password?</span>
            </div>
            <button type="submit" className="mt-4 p-2 rounded-lg shadow-lg bg-blue-600 text-center text-white font-bold hover:bg-blue-700 cursor-pointer transition-all">Sign In</button>
        </form>
        <div className="flex justify-center">
          <p className="text-center text-sm text-gray-500 mt-2">Don't have an account? <span  onClick={handleClick} className="hover:text-blue-500 cursor-pointer">Sign up</span></p>
        </div>
    </div>
  )
}

export default Login
