import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Blogs from "../pages/blog/list";
import Blog from "../pages/blog/view";
import Home from "../pages/home/view";

export default function Router() {
  
  const router = useRoutes([
    {
      element: <MainLayout /> , 
      children : [
        { path: "/", element: <Home /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/blog/:id", element: <Blog /> },
      ] 
    },
  ]);

  return router;
}