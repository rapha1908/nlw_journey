
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { TripDetail } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trip/:tripId",
    element: <TripDetail />,
  },



]);

export function App() {
  return  <RouterProvider router={router} />


}

