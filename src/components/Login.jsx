import { useState } from "react"
import SignIn from "./SignIn"
import Button from "./Button"

const Login = ({showModal, setShowModal}) => {

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
      console.log("Todos los campos son obligatorios")
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
    <div className={`${showModal && "hidden"} flex flex-col gap-1.5 bg-white p-6 rounded-lg shadow-lg w-100`}>
        <h1 className="font-bold text-3xl text-center mb-2">Welcome Back!</h1>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
            <input onChange={handleChange} name="username" value={user.email} type="text" placeholder="Email" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"/>
            <input onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"/>
            <button type="submit" className=" w-40 self-center p-2 rounded-xl bg-purple-700 text-center text-white font-bold hover:bg-purple-600 cursor-pointer transition-all">Log In</button>
        </form>
        <p onClick={handleClick} className="text-center text-sm text-gray-500 mt-2">Forgot Password?{" "}<span className="hover:text-purple-600 cursor-pointer">Create Account</span></p>
        <div className="self-center">
          {
          <Button>
            {/* <img src="../assets/google-color.png" alt="" /> */}
            <button className="font-semibold text-center p-2 border-2 mt-5 hover:cursor-pointer transition-all">
              Sign up with{" "}
              <span className="hover:text-blue-700 transition-all">G</span>
              <span className="hover:text-red-700 transition-all">o</span>
              <span className="hover:text-yellow-300 transition-all">o</span>
              <span className="hover:text-red-700 transition-all">g</span>
              <span className="hover:text-blue-700 transition-all">l</span>
              <span className="hover:text-green-700 transition-all">e</span>
            </button>
          </Button>
          }
        </div>
    </div>
  )
}

export default Login
