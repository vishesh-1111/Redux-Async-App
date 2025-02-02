
import { createSlice } from "@reduxjs/toolkit";
// Initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// Redux slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

// Thunk function to fetch data
export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    dispatch(fetchDataSuccess(result));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default dataSlice.reducer;
