import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import AllApps from "../Components/App/AllApps/AllApps";
import Installation from "../Components/Installation/Installation";
import AppDetails from "../Components/App/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/All-apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
