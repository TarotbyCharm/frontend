import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import BlogIndex from "./Pages/Blogs/BlogIndex";
import NotFound from "./components/NotFound";
import HomeNew from "./Pages/HomeNew";
import BlogDetails from "./Pages/Blogs/BlogDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import PubliceRoute from "./components/routes/PubliceRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import PackageIndex from "./Pages/Packages/PackageIndex";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public route with layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeNew />} />

              <Route path="/packages" element={<PackageIndex />} />

              <Route path="/blogs" element={<BlogIndex />} />
              <Route path="/blogs/:slug" element={<BlogDetails />} />

              {/* Private route with layout */}
              <Route
                path="/private-route"
                element={<PrivateRoute>{/* <PostDetails /> */}</PrivateRoute>}
              />
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}
