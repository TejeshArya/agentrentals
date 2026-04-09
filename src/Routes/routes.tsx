import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { VehicleSearch } from "../pages/VehicleSearch";
import { VehicleDetails } from "../pages/VehicleDetails";
import { Booking } from "../pages/Booking";
import { VendorDashboard } from "../pages/VendorDashboard";
import { AdminDashboard } from "../pages/AdminDashboard";
import { CustomerDashboard } from "../pages/CustomerDashboard";
import { UserProfile } from "../pages/UserProfile";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "search", Component: VehicleSearch },
      { path: "vehicle/:id", Component: VehicleDetails },
      { path: "booking/:id", Component: Booking },
      { path: "vendor", Component: VendorDashboard },
      { path: "admin", Component: AdminDashboard },
      { path: "dashboard", Component: CustomerDashboard },
      { path: "profile", Component: UserProfile },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "*", Component: NotFound },
    ],
  },
]);