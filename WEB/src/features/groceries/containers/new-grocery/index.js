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
    const { createGrocery } = repository
    const dispatch = useDispatch()
    const history = useHistory()

    return {
        onSubmit: () => dispatch(createGrocery(values, history)),
        onNameChange: e => setValues(prev => ({ ...prev, AlimentDenumire: e.target.value })),
        onExpiryDateChange: e => setValues(prev => ({ ...prev, AlimentDataExp: e.target.value })),
        onCategoryChange: e => setValues(prev => ({ ...prev, AlimentCategorie: e.target.value })),
        onAllergiesChange: e => setValues(prev => ({ ...prev, AlimentAlergeni: e.target.value })),
        onCalloryCountChange: e => setValues(prev => ({ ...prev, AlimentNrCalorii: e.target.value })),
        onCommandIdChange: e => setValues(prev => ({ ...prev, ComandaId: e.target.value })),
    }
}

const initialState = {
    "AlimentDenumire": "",
    "AlimentDataExp": "",
    "AlimentCategorie": "",
    "AlimentAlergeni": "",
    "AlimentDisponibilitate": true,
    "AlimentNrCalorii": "",
    "ComandaId": 0
}

export const NewGrocery = () => {
    const classes = useStyles();
    const [values, setValues] = useState(initialState)
    const {
        onSubmit,
        onNameChange,
        onExpiryDateChange,
        onCategoryChange,
        onAllergiesChange,
        onCalloryCountChange,
        onCommandIdChange
    } = useCallbacks(values, setValues)

    return <Grid container lg={12} justify={'center'} spacing={6}>
        <Grid item lg={12}>
            <Typography variant={'h4'} align={'center'}>
                Adauga un nou aliment
            </Typography>
        </Grid>
        <Grid container lg={12}>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container justify={'center'} spacing={6}>
                    <Grid item lg={8}>
                        <TextField onChange={onNameChange} id="AlimentDenumire" label="Denumire" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onExpiryDateChange} id="AlimentDataExp" label="Data expirare" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onCategoryChange} id="AlimentCategorie" label="Categorie" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onAllergiesChange} id="AlimentAlergeni" label="Alergeni" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onCalloryCountChange} id="AlimentNrCalorii" label="Nr. Calorii" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <TextField onChange={onCommandIdChange} id="ComandaId" label="Id Comanda" variant="outlined" fullWidth size={'medium'} />
                    </Grid>
                    <Grid item lg={8}>
                        <Button color="rose" round onClick={() => onSubmit()}>Salveaza</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    </Grid>
}
