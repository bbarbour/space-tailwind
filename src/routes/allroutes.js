import { createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import Crew from '../pages/Crew'
import Technology from "../pages/Technology"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "tours",
      element: <Tours/>
    },
    {
        path: "crew",
        element: <Crew/>
      }
      ,
    {
        path: "technology",
        element: <Technology/>
      }
  ]);

export default router 