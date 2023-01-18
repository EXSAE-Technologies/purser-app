import logo from './logo.svg';
import './App.css';
import * as React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import Home from './routes/home';
import Login from './routes/login';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
