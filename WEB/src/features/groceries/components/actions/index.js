import React from "react";
import Button from "../../../../core/material-kit/components/CustomButtons/Button";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {repository} from "../../repository";

import {useDispatch} from "react-redux";
const useOnSubmit = AlimentId => {
    const dispatch = useDispatch()
    const history = useHistory()
    return () =>{
        dispatch(repository.getOneGrocery(AlimentId))
        history.push(`#update_grocery$${AlimentId}`)
    }
}

export const Actions = AlimentId => {
    const history = useHistory()
    const onSubmit= useOnSubmit(AlimentId)

    return <Grid container lg={12} justify={'center'} spacing={3}>
        <Grid item>
            <Button round color={'primary'} size={'sm'} onClick={onSubmit}>
                Editeaza
            </Button>
        </Grid>
        <Grid item>
            <Button round color={'danger'} onClick={() => history.push(`#delete_grocery$${AlimentId}`)} size={'sm'}>
                Sterge
            </Button>
        </Grid>
    </Grid>;
}
