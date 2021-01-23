import React, {useState} from "react";
import {Grid, TextField, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "../../../../core/material-kit/components/CustomButtons/Button";
import { repository } from "../../repository";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '60vh'
    },
}));

const useCallbacks = (values, setValues) => {
    const { createOrder } = repository
    const dispatch = useDispatch()
    const history = useHistory()

    return {
        onSubmit: () => dispatch(createOrder(values, history)),
        onOrderNameChange: e => setValues(prev => ({ ...prev, ComandaDenumire: e.target.value })),
        onFriendIdChange: e => setValues(prev => ({ ...prev, PrietenId: e.target.value })),
        onGroceryIdChange: e => setValues(prev => ({ ...prev, AlimentId: e.target.value })),
    }
}

const initialState = {
    ComandaDenumire: '',
    PrietenId: 0,
    AlimentId: 0
}

export const NewOrder = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialState)
    const { onSubmit, onOrderNameChange, onFriendIdChange, onGroceryIdChange } = useCallbacks(values, setValues)

    return <Grid container lg={12} justify={'center'} spacing={6}>
        <Grid item lg={12}>
            <Typography variant={'h4'} align={'center'}>
                Creeaza o noua comanda
            </Typography>
        </Grid>
        <Grid container lg={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container justify={'center'} spacing={6}>
                    <Grid item lg={8}>
                        <TextField onChange={onOrderNameChange} id="ComandaDenumire" label="Denumire" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onFriendIdChange} id="PrietenId" label="Id Prieten" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onGroceryIdChange} id="AlimentId" label="Id Aliment" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <Button color="rose" round onClick={() => onSubmit()}>Salveaza</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>
}
