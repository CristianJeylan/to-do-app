import Button from "./Button"
import { useState } from "react"
import Error from "./Error"

const SignIn = ({setShowModal, showModal, error, setError}) => {

  const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }
  
    const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(user).includes('')) {
      setError(!error)
      return
    }
        
    if(user.password.length < 8) {
      console.log("La contraseña debe contener números y debe ser de 8 o más carácteres")
      return
    }

    setUser({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

  }

  return (
    <div className= "w-100 h-fit px-7 py-8 w bg-white rounded-md justify-between absolute inset-0 m-auto shadow-lg flex flex-col gap-1.5">
      <h1 className="font-bold text-3xl text-center mb-5">Sign up</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input onChange={handleChange} name="username" value={user.username} type="text" placeholder="Username" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"/>
        <input onChange={handleChange} name="email" value={user.email} type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"/>
          <input onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"/>
        <input onChange={handleChange} name="confirmPassword" value={user.confirmPassword} type="password" placeholder="Confirm Password" className={`{user.password !== user.confirmPassword && "border-red-600" p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200`}/>
        <div className="flex flex-col gap-0.5">
          <button className="bg-blue-600 rounded-md p-2 font-bold text-white shadow-lg hover:bg-blue-700 cursor-pointer transition-all">Next</button>
          {error && <Error>Todos los campos son obligatorios</Error>}
        </div>
        <p className="text-gray-400 text-sm text-center mb-1.5">Already have an account? <span onClick={() => setShowModal(!showModal)} className=" hover:text-blue-700 cursor-pointer transition-all">Log in</span></p>
      </form>
    </div>
  )
}

export default SignIn
