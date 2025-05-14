import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
// import "./../node_modules/font-awesome/css/font-awesome.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
