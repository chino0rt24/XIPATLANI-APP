import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import { Dashboard, ListUsers } from "../components";
import Home from "../components/Home";
import CLientRegis from "../components/CLientRegis";
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
      {
        path:"CLientRegis",
        element:<CLientRegis/>
      },
      {
        path: "map",
        element: <Map/>
      },
    

    ]
  },
  {path:"/login",
  element:<Login/>
}
]);

export default router;