import React, { Suspense, lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "./store/query.config";
import { PageLoader } from "./pages/UI/Table/PageLoader";
import { UserContext } from "./context/UserContext";
const LoginPage = lazy(() => import("./pages/login"));
const HomePage = lazy(() => import("./pages/home"));
const Bookings = lazy(() => import("./pages/home/componants/Bookings"));
const Destinations = lazy(() => import("./pages/home/componants/Destinations"));
const Dashboard = lazy(() => import("./pages/home/componants/Dashboard"));
const Planes = lazy(() => import("./pages/home/componants/Planes"));
const Settings = lazy(() => import("./pages/home/componants/Settings"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: "/", element: <LoginPage /> },
      {
        path: "/Home",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
        children: [
          { path: "/Home", element: <Dashboard /> },
          { path: "/Home/Destinations", element: <Destinations /> },
          { path: "/Home/Planes", element: <Planes /> },
          { path: "/Home/Settings", element: <Settings /> },
          { path: "/Home/Bookings", element: <Bookings /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <UserContext>
      <Store>
        <RouterProvider router={router} />
      </Store>
    </UserContext>
  );
}
export default App;
