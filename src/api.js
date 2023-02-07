import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchPosts = createAsyncThunk('points/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
})

export const Api = {
  fetchPosts,
}
