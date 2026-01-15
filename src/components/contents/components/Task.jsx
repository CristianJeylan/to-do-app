import "./Task.css"

const Task = () => {
  return (
    <form action="">
      <div className="task">
        <label htmlFor="task" className="task-label">
          <input type="checkbox" name="task" id="task" className="task-checkbox"/>
          <span className="task-checkbox-ui"></span>
          <p className="task-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt corporis nisi autem, natus cumque.</p>
        </label>
        <span className="task-tag">personal</span>
      </div>
      <div className="task">
        <label htmlFor="task1" className="task-label">
          <input type="checkbox" name="task1" id="task1" className="task-checkbox"/>
          <span className="task-checkbox-ui"></span>
          <p className="task-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt corporis nisi autem, natus cumque.</p>
        </label>
        <span className="task-tag">personal</span>
      </div>
      <div className="task">
        <label htmlFor="task2" className="task-label">
          <input type="checkbox" name="task2" id="task2" className="task-checkbox"/>
          <span className="task-checkbox-ui"></span>
          <p className="task-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt corporis nisi autem, natus cumque.</p>
        </label>
        <span className="task-tag">personal</span>
      </div>
    </form>
  )
}

export default Task
    // <form>
    //   <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
    //     <input type="checkbox" name="" id=""  className="check"/>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, omnis repudiandae</p>
    //     <span className="bg-blue-300 p-1 rounded-lg ml-auto">personal</span>
    //   </div>
    // </form>