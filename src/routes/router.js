import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import { Cobro, Dashboard, ListUsers } from "../components";
import Home from "../components/Home";
import CLientRegis from "../components/CLientRegis";
import Map from "../components/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
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
      },{
        path: "Cobro",
        element: <Cobro/>
      },
    

    ]
  },
  {path:"/login",
  element:<Login/>
}
]);

export default router;