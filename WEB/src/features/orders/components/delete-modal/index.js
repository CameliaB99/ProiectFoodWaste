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
    const { deleteOrder } = repository

    return <Modal onClose={() => history.push('/commands')}
                  onSubmit={() => dispatch(deleteOrder(hash.split('$')[1],history))}
                  open={hash.split('$')[0] === '#delete_command'}
                  title={'Confirmare stergere comanda'}>
        <Typography variant={'body1'}>
            Esti sigur ca vrei sa stergi acesta comanda?
        </Typography>
    </Modal>
}
