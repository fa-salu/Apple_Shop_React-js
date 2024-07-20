import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDb = createAsyncThunk('db/fetchDb', async () => {
    const response = await fetch('http://localhost:3000/db')
    const data = await response.json();
    return data;
})

const dbSlice = createSlice({
    name: 'db',
    initialState: {
        data: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDb.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDb.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchDb.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default dbSlice.reducer;