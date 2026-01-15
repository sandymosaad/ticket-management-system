import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTickets from "./pages/AllTickets/AllTickets";
import AddTicket from "./pages/AddTicket/AddTicket";
import EdiTicket from "./pages/EditTicket/EditTicket";
import SignIn from "./pages/Sign-In/SignIn";
import SignUp from "./pages/Sign-up/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <AllTickets /> },
  { path: "/add", element: <AddTicket /> },
  { path: "/edit/:id", element: <EdiTicket /> },
  { path: "/ticket/:id", element: <EdiTicket /> },
  { path: "/register", element: <SignUp /> },
  { path: "/sign-in", element: <SignIn /> },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
