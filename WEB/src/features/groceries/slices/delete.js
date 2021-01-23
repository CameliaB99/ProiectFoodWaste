import { createSlice as buildSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'NOT_RUN',
    data: [],
    errors: []
}

export const deleteSlice = buildSlice({
    name: 'deleteGroceries',
    initialState,
    reducers: {
        remove: state => {
            state.status = 'RUNNING'
        },
        removeSuccess: (state, action) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        },
        removeFailure: (state, action) => {
            state.status = 'FAILURE'
            state.errors = action.payload
        },
    }
})
