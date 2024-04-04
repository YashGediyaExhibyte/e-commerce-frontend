import { useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/dashboard";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Products from "../pages/products";

const routes = [
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
  {
    path: "/login",
    element: <Login />,
  },
];

const Routes = () => useRoutes(routes);

export default Routes;
