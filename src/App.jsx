import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import BlogIndex from "./Pages/Blogs/BlogIndex";
import NotFound from "./components/NotFound";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import PubliceRoute from "./components/routes/PubliceRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import PackageIndex from "./Pages/Packages/PackageIndex";
import CalendarSelection from "./Pages/Booking/CalendarSelection";
import Payment from "./Pages/Booking/Payment";
import BookedSlip from "./Pages/Booking/BookingSlip";
import BookingList from "./Pages/User/BookingList";
import Profile from "./Pages/User/Profile";
import MakeAppointment from "./Pages/Booking/MakeAppointment";
import LocalStorageManager from "./components/LocalStorageManager";
import Index from "./Pages/Contact/Index";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <LocalStorageManager />
          <Routes>
            {/* Public route with layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="/packages" element={<PackageIndex />} />

              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/contact" element={<Index />} />

              {/* Private route with layout */}
              <Route
                path="/appointment"
                element={<PrivateRoute>{<CalendarSelection />}</PrivateRoute>}
              />
              <Route
                path="/appointment/form"
                element={<PrivateRoute>{<MakeAppointment />}</PrivateRoute>}
              />
              <Route
                path="/appointment/:appointmentNo/payment"
                element={<PrivateRoute>{<Payment />}</PrivateRoute>}
              />

              <Route
                path="/appointment/:appointmentNo/booking/slip"
                element={<PrivateRoute>{<BookedSlip />}</PrivateRoute>}
              />

              <Route
                path="/user/bookings-list"
                element={<PrivateRoute>{<BookingList />}</PrivateRoute>}
              />

              <Route
                path="/user/profile"
                element={<PrivateRoute>{<Profile />}</PrivateRoute>}
              />

              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Public auth routes - redirect to home if authenticated */}
            <Route
              path="/login"
              element={
                <PubliceRoute>
                  <Login />
                </PubliceRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PubliceRoute>
                  <Register />
                </PubliceRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
