import { React } from 'react';
import {BrowserRouter} from "react-router-dom";
import  Router from "./routes/routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="ease-in-out bg-secondary-light dark:bg-primary-dark transition duration-300 body-font">
        <Router></Router>
      </div>
    </BrowserRouter>
  );
}

