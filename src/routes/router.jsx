import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import Profile from "../pages/Profile/Profile";
import Error from "../pages/Error/Error";
import AdminRoute from "./AdminRoute";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/Admin/Admin"

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        errorElement: <Error/>,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "shop",
                Component: Shop
            },
            {
                path: "shop/:id",
                Component: ProductDetails,
            },
           
        ]

    },
    {
        path: "/dashboard",
        element:(
            <PrivateRoute>
                <DashboardLayout/>
            </PrivateRoute>
        ),
        children:[
            {
                index: true,
                Component: Dashboard
            },
             {
                path: "cart",
                Component: Cart,
            },
            {
                path: "checkout",
                Component: Checkout
            },
            {
                path: "payment",
                Component: Payment
            },
            {
                path: "profile",
                Component: Profile
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
             {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    },
    {
        path: "admin",
        element:(
            <AdminRoute>
                <AdminLayout/>
            </AdminRoute>
        ),
         children:[
            {
                index: true,
                Component: Admin
            },
            
        ]
    }
]);

export default router;