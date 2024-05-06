import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import List from "../views/List";
import Tasks from "../views/Tasks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,

    },
    {
        path: '/task',
        element: <Tasks />,

    },
    {
        path: '/list',
        element: <List />,

    }
])