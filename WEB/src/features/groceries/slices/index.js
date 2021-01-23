import { combineReducers } from '@reduxjs/toolkit'

import { createSlice } from "./create";
import { getSlice } from './get'
import { getOneSlice } from "./get-one";
import { deleteSlice } from "./delete";
import { updateSlice } from "./update";

export const groceries = combineReducers({
    createGroceries: createSlice.reducer,
    getGroceries: getSlice.reducer,
    getGrocery: getOneSlice.reducer,
    deleteGroceries: deleteSlice.reducer,
    updateGroceries: updateSlice.reducer
})


