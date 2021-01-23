import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'NOT_RUN',
    data: [],
    errors: []
}

export const getSlice = createSlice({
    name: 'getFriends',
    initialState,
    reducers: {
        get: state => {
            state.status = 'RUNNING'
        },
        getSuccess: (state, action) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        },
        getFailure: (state, action) => {
            state.status = 'FAILURE'
            state.errors = action.payload
        }
    }
})
