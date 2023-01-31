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
    path: "/20-react-portfolio/",
    element: <Home/>,
  },
  {
    path:"/20-react-portfolio/about",
    element:<About/>
  },
  {
    path:"/20-react-portfolio/portfolio",
    element:<Portfolio/>
  },
  {
    path:"/20-react-portfolio/contact",
    element:<Contact/>
  },
  {
    path:"/20-react-portfolio/resume",
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
