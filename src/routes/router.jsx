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
        path: "/dashboard",
        Component: DashboardLayout,
        children:[
            {
                index: true,
                Component: Dashboard
            },
            {
                path: "admin",
                Component: Admin
            }
        ]
    }
]);

export default router;