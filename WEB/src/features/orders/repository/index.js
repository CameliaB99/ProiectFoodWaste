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

const getOrders = () => async dispatch => {
    dispatch(get())

    try {
        await api
            .get('/comanda')
            .then(response => dispatch(getSuccess(response.data)))
    }

    catch (e) {
        dispatch(getFailure(e.message))
    }
}

const createOrder = (order, history) => async dispatch => {
    dispatch(create())

    try {
        await api
            .post('/comanda', order)
            .then(response => {
                history.go(0)
                return dispatch(createSuccess(response.data));
            })
    }

    catch (e) {
        dispatch(createFailure(e.message))
    }
}

const deleteOrder = (orderId, history) => async dispatch => {
    dispatch(remove())

    try {
        await api
            .delete(`/comanda/${orderId}`)
            .then(response => {
               window.location.href = '/commands'
                return dispatch(removeSuccess(response))
            })
    }

    catch (e) {
        dispatch(removeFailure(e.message))
    }
}

const updateOrder = (id, order, history) => async dispatch => {
    dispatch(update())

    try {
        await api
            .put(`/comanda/${id}`, {ComandaId : id, ...order})
            .then(response => {
                window.location.href = '/commands'
                return dispatch(updateSuccess(response))
            })
    }

    catch (e) {
        dispatch(updateFailure(e.message))
    }
}

const getOneOrder = orderId => async dispatch => {
    dispatch(getOne())

    try {
        await api
            .get(`/comanda/${orderId}`)
            .then(response => dispatch(getOneSuccess(response.data)))
    }
    catch (e) {
        dispatch(getOneFailure(e.message))
    }
}

export const repository = { getOrders, createOrder, deleteOrder, updateOrder, getOneOrder }
