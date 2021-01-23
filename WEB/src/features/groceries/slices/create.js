import { createSlice as buildSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'NOT_RUN',
    data: [],
    errors: []
}

export const createSlice = buildSlice({
    name: 'createGroceries',
    initialState,
    reducers: {
        create: state => {
            state.status = 'RUNNING'
        },
        createSuccess: (state, action) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        },
        createFailure: (state, action) => {
            state.status = 'FAILURE'
            state.errors = action.payload
        },
    }
})
