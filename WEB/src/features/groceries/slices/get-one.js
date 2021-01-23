import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'NOT_RUN',
    data: [],
    errors: []
}

export const getOneSlice = createSlice({
    name: 'getGrocery',
    initialState,
    reducers: {
        getOne: state => {
            state.status = 'RUNNING'
        },
        getOneSuccess: (state, action) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        },
        getOneFailure: (state, action) => {
            state.status = 'FAILURE'
            state.errors = action.payload
        }
    }
})
