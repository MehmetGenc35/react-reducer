import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
]);
const AppRouter = () => {
    return <RouterProvider router={router} />;
};
export default AppRouter;
