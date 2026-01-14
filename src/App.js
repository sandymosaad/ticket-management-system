import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTickets from "./pages/AllTickets/AllTickets";
import AddTicket from "./pages/AddTicket/AddTicket";
import EdiTicket from "./pages/EditTicket/EditTicket";

const router = createBrowserRouter([
  { path: "/", element: <AllTickets /> },
  { path: "/add", element: <AddTicket /> },
  { path: "/edit/:id", element: <EdiTicket /> },
  { path: "/ticket/:id", element: <EdiTicket /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
