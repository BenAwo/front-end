const Taskbar = () => {
  return (
    <div className="task-bar">
      <div className="task-bar-item">
        <i className="fa fa-filter"></i>
        <span>Tasks</span>
        <select>
          <option value="created">Created</option>
        </select>
        <input type="text" placeholder="Search" />
      </div>
      <div className="task-bar-item">
        <select>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  );
};

export default Taskbar;
