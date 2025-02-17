import { http, publicHttp } from "@/utils/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicHttp.post(`/api/login`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const oAuthLogin = createAsyncThunk(
  "/user/oauth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await publicHttp.get(`/api/auth/google/redirect`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await http.post("/api/auth/logout");
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    user: null,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        user: action.payload.user,
        error: null,
      }))
      .addCase(login.rejected, (state, action) => ({
        ...state,
        status: "failed",
        user: null,
        error: action.error.message,
      })) // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      });
  },
});
export const { clearError } = userSlice.actions;
export default userSlice.reducer;
