import React from "react";
import {useOrderUpdatingContext} from "./context";
import {Grid, TextField} from "@material-ui/core";
import Button from "../../../../core/material-kit/components/CustomButtons/Button.js";

export const Fields = () => {
    const { values, handleChange, handleSubmit } = useOrderUpdatingContext()
    
    return <>
        <Grid item lg={8}>
            <TextField name="ComandaDenumire" value={values.ComandaDenumire} onChange={handleChange} label="Denumire" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="PrietenId" value={values.PrietenId} onChange={handleChange} label="Id Prieten" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}}/>
        </Grid>
        <Grid item lg={8}>
            <TextField name="AlimentId" value={values.AlimentId} onChange={handleChange} label="Id Aliment" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}}/>
        </Grid>
        <Grid item lg={8}>
        <Button round  color="success" onClick={handleSubmit} >
                Confirma
            </Button>
        </Grid>
    </>
}