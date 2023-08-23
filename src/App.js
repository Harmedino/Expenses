import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Logout, { action as logoutAction } from "./component/Auth/Logout";
import Navigation from "./pages/Navigation";
import { loader as authLoader } from "./component/Auth/AuthCheck";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <Navigation />,
    id: "root",
    loader: authLoader,
  },
  {
    path: "/logout",

    action: logoutAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
