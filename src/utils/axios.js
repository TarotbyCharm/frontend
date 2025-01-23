import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

// Create base API instance with common config
const createAPI = (config = {}) => {
  return axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...config.headers,
    },
    ...config,
  });
};

// Public API instance
export const publicHttp = createAPI();

// Protected API instance
export const http = createAPI();

// Setup auth interceptors
export const setupAuthInterceptors = (updateUser, clearAuth) => {
  // Response interceptor for handling auth errors
  http.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Try to refresh the token using HttpOnly cookie
          await publicHttp.post("/api/refresh-token");
          return http(originalRequest);
        } catch (refreshError) {
          clearAuth();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};
