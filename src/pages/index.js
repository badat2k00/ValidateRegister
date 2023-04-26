import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Input from "../components/input/input";
import TaskList from "../components/TaskList/TaskList";
import { get, save } from "../repositories/TodoRepository";
import { useNavigate } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");

function HomePage() {
  const [todos, setTodos] = useState();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTodos(get());
    console.log(setTodos);
  }, []);

  const onSubmit = (title) => {
    let newTodos = [
      {
        id: uuidv4(),
        title: title,
        status: false,
      },
      ...(todos ?? []),
    ];
    setTodos(newTodos);
    save(newTodos);
    setTitle("");
   
  };

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const onCompleteTask = (taskId) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      status: !todos[indexExist].status,
    };
    setTodos([...todos]);
    save(todos);
  };

  const onDeleteTask = (taskId) => {
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos.splice(indexExist, 1);
    setTodos([...todos]);
    save(todos);
  };

  const onEditTask = (taskId, title) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      title: title,
    };
    save(todos);
    setTodos([...todos]);
  };

  const handleLogout = () => {
    // logic hendleLogout
    navigate("/sign-in");
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <button className="absolute top-5 right-5" onClick={handleLogout}>
        Logout
      </button>
      <div className="mx-auto w-2/4 bg-white  p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(title);
            }}
          >
            <Input
              onChangeInput={onChangeTitle}
              value={title}
              placeholder={"Enter your task here..."}
            />
          </form>
        </div>
        <TaskList
          todos={todos}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
        <Footer countTodo={todos?.length} />
      </div>
    </div>
  );
}

export default HomePage;