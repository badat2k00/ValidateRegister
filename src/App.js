import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = React.lazy(() => import("./pages"));
const Login = React.lazy(() => import("./pages/login.js"));
const Register = React.lazy(() => import("./pages/register.js"));

// Tạo các router cho các trang
const routes = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <React.Suspense>
        <Home />
      </React.Suspense>
    ),
  },
  {
    path: "/sign-in",
    Component: () => (
      <React.Suspense>
        <Login />
      </React.Suspense>
    ),
  },
  {
    path: "/sign-up",
    Component: () => (
      <React.Suspense>
        <Register />
      </React.Suspense>
    ),
  },
]);

function App() {
  // const [todos, setTodos] = useState();
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   setTodos(get());
  // }, []);

  // const onSubmit = (title) => {
  //   let newTodos = [
  //     {
  //       id: uuidv4(),
  //       title: title,
  //       status: false,
  //     },
  //     ...(todos ?? []),
  //   ];
  //   setTodos(newTodos);
  //   save(newTodos);
  //   setTitle("");
  // };

  // const onChangeTitle = (value) => {
  //   setTitle(value);
  // };

  // const onCompleteTask = (taskId) => {
  //   // Tìm index của task trong mảng todos thông qua taskid
  //   let indexExist = todos.findIndex(({ id }) => id === taskId);
  //   todos[indexExist] = {
  //     ...todos[indexExist],
  //     status: !todos[indexExist].status,
  //   };
  //   setTodos([...todos]);
  //   save(todos);
  // };

  // const onDeleteTask = (taskId) => {
  //   let indexExist = todos.findIndex(({ id }) => id === taskId);
  //   todos.splice(indexExist, 1);
  //   setTodos([...todos]);
  //   save(todos);
  // };

  // const onEditTask = (taskId, title) => {
  //   // Tìm index của task trong mảng todos thông qua taskid
  //   let indexExist = todos.findIndex(({ id }) => id === taskId);
  //   todos[indexExist] = {
  //     ...todos[indexExist],
  //     title: title,
  //   };
  //   save(todos);
  //   setTodos([...todos]);
  // };

  // return (
  //   <div className="flex h-[100vh] justify-center items-center">
  //     <div className="mx-auto w-2/4 bg-white  p-6">
  //       <div className="w-full">
  //         <form
  //           onSubmit={(e) => {
  //             e.preventDefault();
  //             onSubmit(title);
  //           }}
  //         >
  //           <Input onChangeInput={onChangeTitle} value={title} />
  //         </form>
  //       </div>
  //       <TaskList
  //         todos={todos}
  //         onCompleteTask={onCompleteTask}
  //         onDeleteTask={onDeleteTask}
  //         onEditTask={onEditTask}
  //       />
  //       <Footer countTodo={todos?.length} />
  //     </div>
  //   </div>
  // );
  // Khỏi tạo router provider chuyền routes vừa được khởi tạo
  return <RouterProvider router={routes} />;
}
export default App;