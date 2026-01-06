import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { listenAuthState, LogOutService, SignInService } from "../../api/services/auth";
import { auth } from "../../api/firebase";

export const ToDo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //temporal
  useEffect(()=>{
    SignInService({email:"manolito123@gmail.com", password:"123456"})
  },[])

  useEffect(() => {
    const unsubscribe = listenAuthState(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    //temporal
    console.log(user);
    

    return () => unsubscribe();
  }, [auth]);

  const onClick = async () => {
    await LogOutService();
  };

  if (loading) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Bienvenido {user.email}</h1>
      <button onClick={onClick}>cerrar sesion</button>
    </div>
  );
};
