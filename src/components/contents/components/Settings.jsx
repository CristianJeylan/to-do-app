
const Settings = ({handleSettings}) => {

  return (
    <section className="bg-white absolute inset-0 m-auto w-fit h-fit p-5">
          <div className="flex justify-between w-[900px] mb-6 p-2">
            <h4 className="font-bold text-2xl"><span>⚙</span>{" "}Settings</h4>
            <button onClick={handleSettings} className="hover:cursor-pointer transition-all">✖</button>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="flex flex-col gap-1">
              <img src="" alt="imgUSER" className="w-40 h-40 border"/>
              <span className="text-blue-500 text-center">Change Photo</span>
            </div>
            <form action="" className="flex flex-col gap-5 w-full">
              <label htmlFor="displayName" className="flex flex-col text-md font-semibold gap-1">Display Name
                <input type="text" id="displayName" value={"Alex Morgan"} className="p-2 border w-full rounded-md"/>
              </label>
              <label htmlFor="emailAddress" className="flex flex-col text-md font-semibold gap-1">Email Address
                <input type="text" id="emailAddress" value={"alex.morgan@gmail.com"} className="p-2 border w-full rounded-md"/>
              </label>
            </form>
          </div>
          <div className="border-t border-b py-5 border-gray-300">
            <p className="text-xl font-bold mb-4"><span>🎨</span>{" "}Appearance</p>
            <div className="flex gap-5">
              <div className="items-center flex gap-3 border border-gray-300 bg-gray-200 flex-1 p-3.5 rounded-md hover:border-blue-500 border-2 transition-all cursor-pointer">
                <span className="text-3xl border rounded-full text-center p-2 bg-white">☼</span>
                <div>
                  <p className="font-semibold">Light Mode</p>
                  <span className="text-sm">Clean and bright</span>
                </div>
              </div>
              <div className="items-center flex gap-3 border border-gray-300 bg-gray-200 flex-1 p-3.5 rounded-md hover:border-blue-500 border-2 transition-all cursor-pointer">
                <span className="text-3xl border rounded-full text-center p-2 bg-black text-white">⏾</span>
                <div>
                  <p className="font-semibold">Dark Mode</p>
                  <span className="text-sm">Easy on the eyes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <p className="mt-2 font-semibold text-lg"><span>✔</span> Task Management</p>
          </div>
    </section>
  )
}

export default Settings
