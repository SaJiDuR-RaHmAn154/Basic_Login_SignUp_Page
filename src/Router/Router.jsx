import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Login";
import SignUp from "../SignUp";
import Home from "../Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        }
      ],
    },
  ]);
  
  export default router;