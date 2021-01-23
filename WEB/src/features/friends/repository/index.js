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

const getFriends = () => async dispatch => {
    dispatch(get())

    try {
        await api
            .get('/prieten')
            .then(response => dispatch(getSuccess(response.data)))
    }

    catch (e) {
        dispatch(getFailure(e.message))
    }
}

const createFriend = (friend, history) => async dispatch => {
    dispatch(create())

    try {
        await api
            .post('/prieten', friend)
            .then(response => {
                history.go(0)
                return dispatch(createSuccess(response.data));
            })
    }

    catch (e) {
        dispatch(createFailure(e.message))
    }
}

const deleteFriend = (friendId, history) => async dispatch => {
    dispatch(remove())

    try {
        await api
            .delete(`/prieten/${friendId}`)
            .then(response => {
                window.location.href = '/friends'
                return dispatch(removeSuccess(response))
            })
    }

    catch (e) {
        dispatch(removeFailure(e.message))
    }
}

const updateFriend = (id, friend, history) => async dispatch => {
    dispatch(update())

    try {
        await api
            .put(`/prieten/${id}`, {PrietenId:id ,...friend})
            .then(response => {
                window.location.href = '/friends'
                return dispatch(updateSuccess(response.data))
            })
    }

    catch (e) {
        dispatch(updateFailure(e.message))
    }
}

const getOneFriend = friendId => async dispatch => {
    dispatch(getOne())

    try {
        await api
            .get(`/prieten/${friendId}`)
            .then(response => dispatch(getOneSuccess(response.data)))
    }
    catch (e) {
        dispatch(getOneFailure(e.message))
    }
}

export const repository = { getFriends, createFriend, deleteFriend, updateFriend, getOneFriend }
