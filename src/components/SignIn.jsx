import Button from "./Button"
import Error from "./Error"
import { useState } from "react"

const SignIn = ({setShowModal, showModal}) => {

  const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  const id = crypto.randomUUID()
  const [error, setError] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value, id: id})
  }

    const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(user).includes('')) {
      setError(!error)
    }else {
      setError(error === true ? setError(!error) : error)
      setUser({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }
  }

  return (
    <div className= "w-90 h-125 bg-white rounded-md z-10 justify-between absolute inset-0 m-auto shadow-lg flex flex-col gap-1.5 p-5">
      {error && <Error><p>Todos los campos son obligatorios</p></Error>}
      <h1 className=" font-bold mb-1.5 text-3xl text-center">Sign up</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input onChange={handleChange} name="username" value={user.username} type="text" placeholder="Username" className="p-2 text-gray-400 font-semibold border rounded-md"/>
        <input onChange={handleChange} name="email" value={user.email} type="email" placeholder="Email" className="p-2 text-gray-400 font-semibold border rounded-md"/>
        <input onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" className="p-2 text-gray-400 font-semibold border rounded-md"/>
        <input onChange={handleChange} name="confirmPassword" value={user.confirmPassword} type="password" placeholder="Confirm Password" className="p-2 text-gray-400 font-semibold border rounded-md"/>
        <button className="bg-purple-700 rounded-md shadow-md p-2 font-bold text-white hover:bg-purple-600 cursor-pointer transition-all">Next</button>
      <p className="text-gray-400 text-sm text-center mb-1.5">Already have an account? <span onClick={() => setShowModal(!showModal)} className=" hover:text-purple-700 cursor-pointer">Log in</span></p>
      </form>      <div className="self-center">
        {<Button>
          <button className="font-semibold text-center p-2 border-2 hover:cursor-pointer transition-all">
            Sign up with{" "}
            <span className="hover:text-blue-700 transition-all">G</span>
            <span className="hover:text-red-700 transition-all">o</span>
            <span className="hover:text-yellow-300 transition-all">o</span>
            <span className="hover:text-red-700 transition-all">g</span>
            <span className="hover:text-blue-700 transition-all">l</span>
            <span className="hover:text-green-700 transition-all">e</span>
        </button>
        </Button>}
      </div>
    </div>
  )
}

export default SignIn
