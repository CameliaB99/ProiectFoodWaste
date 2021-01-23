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
    const { deleteGrocery } = repository

    return <Modal onClose={() => history.push('/groceries')}
                  open={hash.split('$')[0] === '#delete_grocery'}
                  onSubmit={() => dispatch(deleteGrocery(hash.split('$')[1], history))}
                  title={'Confirmare stergere aliment'}>
        <Typography variant={'body1'}>
            Esti sigur ca vrei sa stergi acest aliment?
        </Typography>
    </Modal>
}
