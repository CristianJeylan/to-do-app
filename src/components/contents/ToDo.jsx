import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { listenAuthState, LogOutService, SignInService } from "../../api/services/auth";
import { auth } from "../../api/firebase";
import Task from "./components/Task";
import Button from "../Button";
import ListTasks from "./components/ListTasks";
import Settings from "./components/Settings";
import NewTask from "./components/NewTask";

export const ToDo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false)
  const [showNewTask, setShowNewTask] = useState(false)

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

  const handleLogout = async () => {
    let salir = confirm("Seguro que desea cerrar seccion")
    salir ? await LogOutService() : alert("no cerro seccion")
  };

  if (loading) return <p>Cargando...</p>;
  if (!user) return <Navigate to="/auth" />;

  const handleSettings = () => {
    setShowSettings(!showSettings)
  }

  const handleShowNewTask = () => {
    setShowNewTask(!showNewTask)
  }

  const Fecha = new Date()

  function reloj() {
    let horas = Fecha.getHours();
    let miuntos = Fecha.getMinutes();
    const ampm = horas >= 12 ? "PM" : "AM"

    let hora12 = horas % 12
    hora12 = hora12 ? hora12 : 12

    horas < 10 ? "0" + horas : horas
    miuntos < 10 ? "0" + miuntos : miuntos

    const formato24 = `${horas}:${miuntos}`
    const formato12 = `${hora12}:${miuntos} ${ampm}`

    return [formato12, formato24]

  }

  setInterval(reloj, 60000)

  const [formato12, formato24] = reloj()

  const diasSemana = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 
  'Jueves', 'Viernes', 'Sábado'
  ];

  const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="h-screen w-full">
      <main className={`${showSettings && "blur-sm"} ${showNewTask && "blur-sm"} h-full w-full bg-gray-200 flex`}>
        <section className="md:w-1/7 bg-white flex flex-col">
        <div className="flex items-center gap-2 p-3">
          <img src="" alt="imgUSER" className="w-12 h-12 rounded-full border bg-blue-500"/>
          <div className="flex flex-col">
            <p className="font-semibold">{user.displayName}</p>
            <span className="text-sm text-gray-500">Basic Plan</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-white p-3 justify-between">
          <div className="flex flex-col gap-2">
            <button className="text-left p-2 rounded-md hover:cursor-pointer transition-all focus:text-blue-500 focus:bg-blue-100 text-sm font-semibold text-gray-800">My day</button>
            <button className="text-left p-2 rounded-md hover:cursor-pointer transition-all focus:text-blue-500 focus:bg-blue-100 text-sm font-semibold text-gray-800">Important</button>
            <button className="text-left p-2 rounded-md hover:cursor-pointer transition-all focus:text-blue-500 focus:bg-blue-100 text-sm font-semibold text-gray-800">Planned</button>
            <button className="text-left p-2 rounded-md hover:cursor-pointer transition-all focus:text-blue-500 focus:bg-blue-100 text-sm font-semibold text-gray-800">Projects</button>
          </div>
          <div>
            <form action="" className="flex flex-col gap-3">
              <label htmlFor="darkMode" className="flex justify-between text-sm font-semibold text-gray-800">⏾ Dark Mode
                <input type="checkbox" name="darkMode" id="darkMode" />
              </label>
              <button onClick={handleLogout} className="bg-blue-500 text-center p-2 text-white rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all">Logout</button>
            </form>
          </div>
        </div>
        </section>
        <section className="md:w-6/7 px-6 py-3 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <header className="flex flex-col gap-0.5">
              <h1 className="font-black text-3xl">Good Morning, {" " + user.displayName}</h1>
              <p className="font-semibold text-sm text-gray-700">{`${diasSemana[Fecha.getDay()]}, ${meses[Fecha.getMonth()]}  ${Fecha.getDate()}`} | {formato24}</p>
            </header>
            <button onClick={handleSettings} className={`${showSettings && "hidden"} ${showNewTask && "hidden"} text-2xl self-end scale-90 hover:scale-none cursor-pointer transition-all`}>⚙</button>
          </div>
          <div className="flex gap-4 mt-3">
            <div className="bg-blue-500 flex-1 rounded-md p-3 shadow-md">
              <div className="flex justify-between">
                <p className="text-white text-sm">Total tasks</p>
                <span>📋</span>
              </div>
              <span className="text-2xl text-white font-semibold">{0}</span>
            </div>
            <div className="bg-white flex-1 rounded-md p-3 shadow-md">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Completed</p>
                <span>✅</span>
              </div>
              <span className="text-2xl font-semibold">{0}</span>
            </div>
            <div className="bg-white flex-1 rounded-md p-3 shadow-md">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Pending</p>
                <span>⏰</span>
              </div>
              <span className="text-2xl font-semibold">{0}</span>
            </div>
          </div>
        </div>
        <div>
          <ListTasks/>
        </div>
        <button onClick={handleShowNewTask} className={`${showNewTask && "hidden"} ${showSettings && "hidden"} absolute bottom-6 right-6 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer px-3 py-1.5 transition-all text-center font-semibold text-white rounded-md`}>Add Task</button>
        </section>
      </main>
      {showSettings && <Settings handleSettings = {handleSettings}/>}
      {showNewTask && <NewTask handleShowNewTask = {handleShowNewTask}/>}
    </div>
  );
};