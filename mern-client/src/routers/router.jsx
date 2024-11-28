// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Logout from "../components/Logout";
import UserLogin from "../components/UserLogin"; 
import UserDashboard from "../dashboard/UserDashboard"; 
import Checkout from "../components/CheckoutPage"; // Import Checkout Component

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop", 
        element: <Shop />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/blog", 
        element: <Blog />,
      },
      {
        path: "/book/:id", // Single book details page
        element: <SingleBook />,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/user-login", 
        element: <UserLogin />,
      },
      {
        path: "/user-dashboard", 
        element: <UserDashboard />,
      },
      {
        path: "/checkout",  // Route for Checkout page
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/admin/dashboard", 
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "upload", 
        element: <UploadBooks />,
      },
      {
        path: "manage", 
        element: <ManageBooks />,
      },
      {
        path: "edit-books/:id", // Editing books
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/sign-up", 
    element: <Signup />,
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/logout", 
    element: <Logout />,
  },
]);

export default router;
