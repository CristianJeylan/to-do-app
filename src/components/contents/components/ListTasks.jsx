import Task from "./Task"

const ListTasks = () => {
  return (
    <div className="mt-6">
      <p className="font-bold text-gray-800 mb-4">Tasks</p>
      <div className="flex flex-col gap-3">
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </div>
    </div>
  )
}

export default ListTasks
