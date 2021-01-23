import React from "react";
import Button from "../../../../core/material-kit/components/CustomButtons/Button";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {repository} from "../../repository";
const useOnSubmit = PrietenId => {
    const dispatch = useDispatch()
    const history = useHistory()
    return () =>{
        dispatch(repository.getOneFriend(PrietenId))
        history.push(`#update_friend$${PrietenId}`)
    }
}

export const Actions = PrietenId => {
    const history = useHistory()
    const onEdit = useOnSubmit(PrietenId)

    return <Grid container lg={12} justify={'center'} spacing={3}>
        <Grid item>
            <Button round color={'primary'} size={'sm'} onClick={onEdit}>
                Editeaza
            </Button>
        </Grid>
        <Grid item>
            <Button round color={'danger'} size={'sm'} onClick={() => history.push(`#delete_friend$${PrietenId}`)}>
                Sterge
            </Button>
        </Grid>
    </Grid>;
}
