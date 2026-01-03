import { useState } from "react"
import Error from "./Error"

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)
  const id = crypto.randomUUID()

  const handleChange = e => {
    const {name, value} = e.target
    setUser({...user, [name]: value, id: id})
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(user).includes('')) {
      setError(!error)
    } else {
      setError(error === true ? setError(!error) : error)
      setUsers([...users, user])
      setUser({
        username: '',
        password: ''
      })
    }
  }

  return (
    <div className="flex flex-col gap-1.5 bg-white p-5 rounded-md shadow-lg w-100">
        {error && <Error/>}
        <h1 className="font-bold text-3xl text-center mb-2">Welcome Back!</h1>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
            <input onChange={handleChange} name="username" value={user.username} type="text" placeholder="Username" className="border p-2 rounded-lg placeholder:text-gray-500 font-semibold"/>
            <input onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" className="border p-2 rounded-lg placeholder:text-gray-500 font-semibold"/>
            <button type="submit" className=" w-40 self-center p-2 rounded-xl bg-purple-700 text-center text-white font-bold hover:bg-purple-600 cursor-pointer transition-all">Log In</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-2">Forgot Password? Create Account</p>
    </div>
  )
}

export default Login
