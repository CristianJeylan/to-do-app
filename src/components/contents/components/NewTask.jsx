
const NewTask = ({handleShowNewTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="bg-gray-100 absolute inset-0 rounded-lg m-auto w-fit h-fit">
      <div className="flex w-[900px] justify-between p-5">
        <p className="font-bold">Add New Task</p>
        <button onClick={handleShowNewTask} className="hover:cursor-pointer transition-all">✖</button>
      </div>
      <form onSubmit={handleSubmit} action="" className="flex flex-col p-5 gap-5 border-t border-gray-400">
        <label htmlFor="tite" className="text-sm flex flex-col gap-1">What needs to be done?
          <input type="text" name="tite" id="tite" className="p-2.5 border rounded-md border-gray-400 shadow-md" placeholder="e.g Redesign homepage hero section"/>
        </label>
        <label htmlFor="description" className="text-sm flex flex-col gap-1">Description
          <textarea name="description" id="description" placeholder="Add details about this task" className="border p-2.5 shadow-md rounded-md border-gray-400"></textarea>
        </label>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-sm">Prority Level</span>
            <div className="flex gap-2">
              <button className="py-3  px-4 text-center text-sm rounded-md shadow-md border border-gray-100 hover:cursor-pointer">High</button>
              <button className="py-3  px-4 text-center text-sm rounded-md shadow-md border border-gray-100 hover:cursor-pointer">Medium</button>
              <button className="py-3  px-4 text-center text-sm rounded-md shadow-md border border-gray-100 hover:cursor-pointer">Low</button>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="dateTask" className="flex flex-col text-sm gap-2">Due Date
              <input type="date" name="dateTask" id="dateTask" className="p-3 shadow-md rounded-md"/>
            </label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default NewTask
