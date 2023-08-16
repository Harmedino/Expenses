
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from './component/Auth/Login'
import Register from './component/Auth/Register'
import Navigation from './pages/Navigation'

const router = createBrowserRouter([
  { path: '/', element: <Login /> }, {
  path:'/register', element:<Register/>
  },
  {path:'/home',element:<Navigation/>}
])

function App() {
  
  return (
      
      <RouterProvider router={ router} />
    
  );
}

export default App;
