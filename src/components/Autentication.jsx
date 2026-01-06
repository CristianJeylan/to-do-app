import Login from "./Login"
import SignIn from "./SignIn"
import { useState } from "react"

const Autentication = () => {

  const [showModal, setShowModal] = useState(false)
    
  return (
    <div>
      <Login setShowModal={setShowModal} showModal={showModal}/>
        {showModal && (
          <SignIn setShowModal={setShowModal} showModal={showModal}/>
        )}
    </div>
  )
}

export default Autentication
