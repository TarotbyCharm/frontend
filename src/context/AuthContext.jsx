import { createContext, useContext, useState, useEffect } from "react";
import {
  setupAuthInterceptors,
  getToken,
  getRefreshToken,
  removeTokens,
  http,
} from "@/utils/axios";
import { useDispatch } from "react-redux";
import { login } from "@/redux/reducers/UserSlice";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const updateUser = (user) => {
    setIsAuthenticated(true);
    dispatch(login.fulfilled({ user }, "", {}));
  };

  const clearAuth = () => {
    setIsAuthenticated(false);
    removeTokens();
    dispatch({ type: "user/logout" });
  };

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = async () => {
      try {
        const token = getToken();
        const refreshToken = getRefreshToken();

        if (!token && !refreshToken) {
          clearAuth();
          return;
        }

        // Try to get user data with current token
        try {
          const response = await http.get("/api/auth/user");
          updateUser(response.data);
        } catch (error) {
          // If token is invalid but we have refresh token, let the interceptor handle it
          if (error.response?.status === 401 && refreshToken) {
            const response = await http.get("/api/auth/user");
            updateUser(response.data);
          } else {
            throw error;
          }
        }
      } catch (error) {
        clearAuth();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
    setupAuthInterceptors(updateUser, clearAuth);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

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
