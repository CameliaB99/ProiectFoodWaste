import { getSlice } from "../slices/get";
import { getOneSlice } from "../slices/get-one";
import { createSlice } from '../slices/create'
import { deleteSlice } from "../slices/delete";
import { updateSlice } from "../slices/update";
import {api} from '../../../app/api';

const { get, getSuccess, getFailure } = getSlice.actions
const { getOne, getOneSuccess, getOneFailure } = getOneSlice.actions
const { create, createSuccess, createFailure } = createSlice.actions
const { remove, removeSuccess, removeFailure } = deleteSlice.actions
const { update, updateSuccess, updateFailure } = updateSlice.actions

const getGroceries = () => async dispatch => {
    dispatch(get())

    try {
        await api
            .get('/aliment')
            .then(response => dispatch(getSuccess(response.data)))
    }

    catch (e) {
        dispatch(getFailure(e.message))
    }
}

const createGrocery = (grocery, history) => async dispatch => {
    dispatch(create())

    try {
        await api
            .post('/aliment', grocery)
            .then(response => {
                history.go(0)
                return dispatch(createSuccess(response.data));
            })
    }

    catch (e) {
        dispatch(createFailure(e.message))
    }
}

const deleteGrocery = (groceryId, history) => async dispatch => {
    dispatch(remove())

    try {
        await api
            .delete(`/aliment/${groceryId}`)
            .then(response => {
                window.location.href = '/groceries'
                return dispatch(removeSuccess(response))
            })
    }

    catch (e) {
        dispatch(removeFailure(e.message))
    }
}

const updateGrocery = (id, grocery, history) => async dispatch => {
    dispatch(update())

    try {
        await api
            .put(`/aliment/${id}`, {AlimentId : id, ...grocery})
            .then(response => {
                window.location.href = '/groceries' 
                return dispatch(updateSuccess(response))
            })
    }

    catch (e) {
        dispatch(updateFailure(e.message))
    }
}

const getOneGrocery = GroceryId => async dispatch => {
    dispatch(getOne())

    try {
        await api
            .get(`/aliment/${GroceryId}`)
            .then(response => dispatch(getOneSuccess(response.data)))
    }
    catch (e) {
        dispatch(getOneFailure(e.message))
    }
}

export const repository = { getGroceries, createGrocery, deleteGrocery, updateGrocery, getOneGrocery }
