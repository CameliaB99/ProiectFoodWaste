import { combineReducers } from '@reduxjs/toolkit'

import { createSlice } from "./create";
import { getSlice } from './get'
import { getOneSlice } from "./get-one";
import { deleteSlice } from "./delete";
import { updateSlice } from "./update";

export const orders = combineReducers({
    createOrders: createSlice.reducer,
    getOrders: getSlice.reducer,
    getOrder: getOneSlice.reducer,
    deleteOrders: deleteSlice.reducer,
    updateOrders: updateSlice.reducer
})


