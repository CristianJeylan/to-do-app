import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { listenAuthState, LogOutService, SignInService } from "../../api/services/auth";
import { auth } from "../../api/firebase";
import Task from "./components/Task";
import Button from "../Button";
import ListTasks from "./components/ListTasks";

export const ToDo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false)

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
  if (!user) return <Navigate to="/auth" />;
  console.log(user)

  const Fecha = new Date()

  const diasSemana = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 
  'Jueves', 'Viernes', 'Sábado'
  ];

  const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="h-screen w-full bg-gray-200">
      <main className={`${showModal && "blur-sm"} flex gap-x-2.5 overflow-hidden`}>
        <section className="md:w-3/5 flex flex-col p-5">
          <header className=" mb-12">
            <h1 className="text-5xl font-bold">Hola{" "+ user.displayName + " "}👋</h1>
            <p className="font-semibold text-lg">{`${diasSemana[Fecha.getDay()]}, ${meses[Fecha.getMonth()]}  ${Fecha.getDate()}`}</p>
          </header>
          <ListTasks/>
        </section>
        <section className="md:w-2/5 flex flex-col h-screen justify-between items-end p-6 border">
          <div className="w-30 h-30 border-green-500 border-6 rounded-full flex flex-col justify-center items-center">
            <span className="font-bold">3/8 tasks</span>
            <span className="text-gray-400 text-sm">completed</span>
          </div>
          <Button>
            <button onClick={() => setShowModal(!showModal)} className={`py-3 px-5 rounded-full bg-purple-600 font-semibold text-white text-center text-3xl hover:bg-purple-500 cursor-pointer transition-all`}>+</button>
          </Button>
        </section>
      </main>
      {showModal && (
        <div className="bg-white h-100 w-100 absolute inset-0 m-auto rounded-lg p-2">
          <h2 className="text-2xl font-bold">Create New Task</h2>
          <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2">
            <input type="text" placeholder="Task name" className="mt-1.5 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"/>
            <div className="flex justify-around">
              <div className="h-20 w-20 bg-red-500"></div>
              <div className="h-20 w-20 bg-red-500"></div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-lg">Priority</h5>
              <div className="flex justify-around">
                <label htmlFor="High" className="flex items-center justify-center gap-5">
                  <input type="checkbox" name="High" id="High" className="h-5 w-5"/>High
                </label>
                <label htmlFor="Medium" className="flex items-center justify-center  gap-5">
                  <input type="checkbox" name="Medium" id="Medium" className="h-5 w-5"/>Medium
                </label>
                <label htmlFor="Low" className="flex items-center justify-center gap-5">
                  <input type="checkbox" name="Low" id="Low" className="h-5 w-5"/>Low
                </label>
              </div>
              <div className="flex justify-around">
                <button onClick={() => {setShowModal(false)}} className="bg-gray-500 py-2 px-8 text-center rounded-sm font-semibold hover:bg-gray-600 cursor-pointer transition-all">Cancel</button>
                <button className="bg-purple-600 py-2 px-8 text-center rounded-sm font-semibold text-white hover:bg-purple-500 cursor-pointer transition-all">Create Task</button>
              </div>
            </div>
          </form>
        </div>
      )}
      {/* <button onClick={onClick}>cerrar sesion</button> */}
    </div>
  );
};
