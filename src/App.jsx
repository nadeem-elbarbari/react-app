import "./App.css";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";

const myRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: '*',
        element: <Notfound />
      }
    ],
  },
]);

function App() {
  return (
    <div>
      
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
