import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import { Modal } from '../../../../core/modal'
import {Typography} from "@material-ui/core";
import {repository} from "../../repository";
import {useDispatch} from "react-redux";

export const DeleteModal = () => {
    const { hash } = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const { deleteFriend } = repository

    return <Modal onClose={() => history.push('/friends')}
                  open={hash.split('$')[0] === '#delete_friend'}
                  onSubmit={() => dispatch(deleteFriend(hash.split('$')[1], history))}
                  title={'Confirmare stergere prieten'}>
        <Typography variant={'body1'}>
            Esti sigur ca vrei sa-ti stergi acest prieten?
        </Typography>
    </Modal>
}
