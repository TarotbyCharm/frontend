import { login } from "@/redux/reducers/UserSlice";
import { setupAuthInterceptors } from "@/utils/axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = (user) => {
    setIsAuthenticated(true);
    dispatch(login.fulfilled({ user }, "", {}));
  };

  const clearAuth = () => {
    setIsAuthenticated(false);
    dispatch({ type: "auth/logout" });
  };

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = async () => {
      try {
        const response = await api.get("/auth/user");
        updateUser(response.data.user);
      } catch (error) {
        clearAuth();
      }
    };

    checkAuth();
    setupAuthInterceptors(updateUser, clearAuth);
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateUser, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
