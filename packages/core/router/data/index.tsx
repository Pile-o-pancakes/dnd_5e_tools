import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@app/landing";
import { Plotcreator } from "@app/plotcreator";
import { Plots } from "@app/plots";
import { Sheets } from "@app/sheets";
import { Sheetcreator } from "@app/sheetcreator";
import { NotFound } from "@app/notfound";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/sheets",
        element: <Sheets />
    },
    {
        path: "/sheets/create",
        element: <Sheetcreator />
    },
    {
        path: "/plots/",
        element: <Plots />
    },
    {
        path: "/plots/create",
        element: <Plotcreator />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export const Router = () => {

    return(
        <RouterProvider router={ routes }/>
    )
}