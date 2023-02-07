import { createSlice } from '@reduxjs/toolkit'
import { Api } from './api'

export const slice = createSlice({
  name: 'points',
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Api.fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(Api.fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(Api.fetchPosts.rejected, (state, action) => {
      state.error = action.error.message
      state.isLoading = false
    })
  },
})
