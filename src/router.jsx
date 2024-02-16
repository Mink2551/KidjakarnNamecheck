import { createBrowserRouter } from "react-router-dom";
import Home from "./1Home";
import Gradeselect from "./2Gradeselect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gradeselect",
    element: <Gradeselect />,
  },
  

]);

export { router };