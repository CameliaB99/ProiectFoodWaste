import { combineReducers } from '@reduxjs/toolkit'

import { orders } from "../features/orders/slices";
import { friends } from "../features/friends/slices";
import { groceries } from "../features/groceries/slices";

export const rootReducer = combineReducers({
    orders,
    friends,
    groceries
})
