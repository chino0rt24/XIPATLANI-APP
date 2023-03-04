import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import { Dashboard, ListUsers } from "../components";
import Home from "../components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "users",
        element: <ListUsers/>
      },

    ]
  },
  {path:"/login",
  element:<Login/>
}
]);

export default router;