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
    const { createFriend } = repository
    const dispatch = useDispatch()
    const history = useHistory()

    return {
        onSubmit: () => dispatch(createFriend(values, history)),
        onFriendNameChange: e => setValues(prev => ({ ...prev, PrietenNume: e.target.value })),
        onFriendTypeChange: e => setValues(prev => ({ ...prev, PrietenTip: e.target.value })),
        onFriendAllergyChange: e => setValues(prev => ({ ...prev, PrietenAlergii: e.target.value })),
    }
}

const initialState = {
    PrietenNume: '',
    PrietenTip: '',
    PrietenAlergii: ''
}

export const NewFriend = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialState)
    const { onSubmit, onFriendNameChange, onFriendTypeChange, onFriendAllergyChange } = useCallbacks(values, setValues)

    return <Grid container lg={12} justify={'center'} spacing={6}>
        <Grid item lg={12}>
            <Typography variant={'h4'} align={'center'}>
                Adauga un nou prieten
            </Typography>
        </Grid>
        <Grid container lg={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container justify={'center'} spacing={6}>
                    <Grid item lg={8}>
                        <TextField onChange={onFriendNameChange} id="PrietenNume" label="Nume" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onFriendTypeChange} id="PrietenTip" label="Tip prieten" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onFriendAllergyChange} id="PrietenAlergii" label="Alergii" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <Button color="rose" round onClick={() => onSubmit()}>Salveaza</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>
}
