import Home from "./Home"
import About from "./components/About"
import Contact from "./components/contact"
import Portfolio from "./components/portfolio"

import Resume from "./components/resume"
// import About from "./components/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/portfolio",
    element:<Portfolio/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
]
);



function App() {
  return (
    <RouterProvider router={router} />
);
}

export default App;
