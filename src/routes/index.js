import { useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/dashboard";
import Dashboard from "../pages/dashboard";
import Products from "../pages/products";
import SignUp from "../pages/signUp";
import Login from "../pages/login";

const routes = [
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
];

const Routes = () => useRoutes(routes);

export default Routes;
