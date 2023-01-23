import Home from "./Home"
import MyMenu from "./components/MyMenu";
import About from "./components/About";

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
  }
]
);



function App() {
  return (
    <RouterProvider router={router} />
);
}

export default App;
