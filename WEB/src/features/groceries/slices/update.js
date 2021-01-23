import { createSlice as buildSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'NOT_RUN',
    data: [],
    errors: []
}

export const updateSlice = buildSlice({
    name: 'updateGroceries',
    initialState,
    reducers: {
        update: state => {
            state.status = 'RUNNING'
        },
        updateSuccess: (state, action) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        },
        updateFailure: (state, action) => {
            state.status = 'FAILURE'
            state.errors = action.payload
        },
    }
})
