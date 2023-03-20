import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Blogs from "../pages/blog/list";
import Blog from "../pages/blog/view";
import Home from "../pages/home/view";
import {Quote} from "../pages/Quote/quote";
import {GithubUserSerach} from "../pages/github/usersearch"

export default function Router() {
  
  const router = useRoutes([
    {
      element: <MainLayout /> , 
      children : [
        { path: "/", element: <Home /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/blog/:id", element: <Blog /> },
        { path: "/quote", element: <Quote /> },
        { path: "/github/search", element: <GithubUserSerach /> },
      ] 
    },
  ]);

  return router;
}