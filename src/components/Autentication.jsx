import Login from "./Login"
import SignIn from "./SignIn"
import { useState } from "react"

const Autentication = () => {

  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)
    
  return (
    <div>
      <Login setShowModal={setShowModal} showModal={showModal}  error = {error} setError = {setError} />
        {showModal && (
          <SignIn setShowModal={setShowModal} showModal={showModal}  error = {error} setError = {setError} />
        )}
    </div>
  )
}

export default Autentication
