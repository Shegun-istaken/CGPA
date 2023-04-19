import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import FillData from "./views/FillData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scores",
    element: <FillData />,
  },
]);

export default router;
