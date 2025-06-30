import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Couter from "./components/Couter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/counter",
          element: <Couter />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
