import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import { Dashboard } from "../components";
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

    ]
  },
  {path:"/login",
  element:<Login/>
}
]);

export default router;