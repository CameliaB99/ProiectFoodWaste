import React from "react";
import Button from "../../../../core/material-kit/components/CustomButtons/Button";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import {repository} from "../../repository";

import {useDispatch} from "react-redux";
const useOnSubmit = ComandaId => {
    const dispatch = useDispatch()
    const history = useHistory()
    return () =>{
        dispatch(repository.getOneOrder(ComandaId))
        history.push(`#update_command$${ComandaId}`)
    }
}

export const Actions = ComandaId => {
    const onSubmit= useOnSubmit(ComandaId)
    const history = useHistory()

    return <Grid container lg={12} justify={'center'} spacing={3}>
        <Grid item>
            <Button round color={'primary'} size={'sm'} onClick={onSubmit}>
                Editeaza
            </Button>
        </Grid>
        <Grid item>
            <Button round color={'danger'} size={'sm'} onClick={() => history.push(`#delete_command$${ComandaId}`)}>
                Sterge
            </Button>
        </Grid>
    </Grid>;
}
