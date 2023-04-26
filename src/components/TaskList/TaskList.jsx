import Task from "../task/task";

const TaskList = ({ todos, onCompleteTask, onDeleteTask, onEditTask }) => {
  return (
    <div className="flex flex-col h-[500px] overflow-auto mt-4 mb-8">
      {/* Render List data */}
      {todos?.map((value, index) => (
        // binding data to component
        <Task
          key={value.id}
          id={value.id}
          status={value.status}
          title={value.title}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;