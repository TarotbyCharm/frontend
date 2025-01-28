import { publicHttp } from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,

  currentPost: null,
  postStatus: "idle",
  postError: null,

  recentPosts: [],
  searchResults: [],
  searchStatus: "idle",
  searchError: null,

  specialPost: null,
  specialPostStatus: "idle",
  specialPostError: null,

  currentPage: 1,
  lastPage: 1,
  hasMore: false,
  loadingMore: false,
  total: 0,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { getState }) => {
    const { currentPage } = getState().posts;
    try {
      const response = await publicHttp.get(`/api/posts-list`, {
        params: { page: currentPage },
      });

      return {
        posts: response.data.data.data,
        meta: {
          current_page: response.data.data.meta.current_page,
          last_page: response.data.data.meta.last_page,
          per_page: response.data.data.meta.per_page,
          total: response.data.data.meta.total,
        },
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to fetch posts");
    }
  }
);

export const fetchPostDetails = createAsyncThunk(
  "posts/fetchPostDetails",
  async (slug) => {
    try {
      const response = await publicHttp.get(`api/posts-list/${slug}`);
      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch post details"
      );
    }
  }
);

export const fetchTodaySpecialPost = createAsyncThunk(
  "posts/fetchTodaySpecialPost",
  async () => {
    try {
      const response = await publicHttp.get(`api/posts-list/special/today`);
      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch post details"
      );
    }
  }
);

export const fetchRecentPosts = createAsyncThunk(
  "posts/fetchRecentPosts",
  async (params) => {
    try {
      const response = await publicHttp.get(
        `/api/posts-list/${params.postId}/recent?category=${params.category}`
      );
      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch recent posts"
      );
    }
  }
);

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (query) => {
    try {
      const response = await publicHttp.get(`api/posts-list/search`, {
        params: { search: query },
      });
      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to search posts"
      );
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        if (state.currentPage === 1) {
          state.status = "loading";
        } else {
          state.loadingMore = true;
        }
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loadingMore = false;

        if (state.currentPage === 1) {
          state.posts = action.payload.posts;
        } else {
          state.posts = [...state.posts, ...action.payload.posts];
        }

        // Update pagination metadata from Laravel response
        state.lastPage = action.payload.meta.last_page;
        state.total = action.payload.meta.total;
        state.hasMore = state.currentPage < action.payload.meta.last_page;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.loadingMore = false;
        state.error = action.error.message;
      })
      // Post details
      .addCase(fetchPostDetails.pending, (state) => {
        state.postStatus = "loading";
        state.currentPost = null;
      })
      .addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.postStatus = "succeeded";
        state.currentPost = action.payload;
      })
      .addCase(fetchPostDetails.rejected, (state, action) => {
        state.postStatus = "failed";
        state.postError = action.error.message;
      })
      // today special post
      .addCase(fetchTodaySpecialPost.pending, (state) => {
        state.specialPostStatus = "loading";
        state.specialPost = null;
      })
      .addCase(fetchTodaySpecialPost.fulfilled, (state, action) => {
        state.specialPostStatus = "succeeded";
        state.specialPost = action.payload;
      })
      .addCase(fetchTodaySpecialPost.rejected, (state, action) => {
        state.specialPostStatus = "failed";
        state.specialPostError = action.error.message;
      })
      // Recent posts
      .addCase(fetchRecentPosts.fulfilled, (state, action) => {
        state.recentPosts = action.payload;
      })
      // Search posts
      .addCase(searchPosts.pending, (state) => {
        state.searchStatus = "loading";
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.searchStatus = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.searchStatus = "failed";
        state.searchError = action.error.message;
      });
  },
});

export const { incrementPage } = postsSlice.actions;
export default postsSlice.reducer;
