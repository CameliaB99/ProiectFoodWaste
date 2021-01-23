import React from "react";
import {Grid, TextField} from "@material-ui/core";
import Button from "../../../../core/material-kit/components/CustomButtons/Button.js";
import {useFriendUpdatingContext} from "./context";


export const Fields = () => {
    const { values, handleChange, handleSubmit } = useFriendUpdatingContext()
    
    return <>
        <Grid item lg={8}>
            <TextField name="PrietenNume" value={values.PrietenNume} onChange={handleChange} label="Nume" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="PrietenTip" value={values.PrietenTip} onChange={handleChange} label="Tip prieten" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="PrietenAlergii" value={values.PrietenAlergii} onChange={handleChange} label="Alergii" variant="outlined" fullWidth size={'medium'}  InputLabelProps={{shrink:true}}/>
        </Grid>
        <Grid item lg={8}>
        <Button round  color="success" onClick={handleSubmit} >
                Confirma
            </Button>
        </Grid>
        
    </>
}