import { combineReducers } from '@reduxjs/toolkit'

import { createSlice } from "./create";
import { getSlice } from './get'
import { getOneSlice } from "./get-one";
import { deleteSlice } from "./delete";
import { updateSlice } from "./update";

export const friends = combineReducers({
    createFriends: createSlice.reducer,
    getFriends: getSlice.reducer,
    getFriend: getOneSlice.reducer,
    deleteFriends: deleteSlice.reducer,
    updateFriends: updateSlice.reducer
})


