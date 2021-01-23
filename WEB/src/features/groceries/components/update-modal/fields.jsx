import React from "react";
import {useGroceryUpdatingContext} from "./context";
import {Grid, TextField} from "@material-ui/core";
import Button from "../../../../core/material-kit/components/CustomButtons/Button.js";

export const Fields = () => {
    const { values, handleChange, handleSubmit } = useGroceryUpdatingContext()
    
    return <>
        <Grid item lg={8}>
            <TextField name="AlimentDenumire" value={values.AlimentDenumire} onChange={handleChange} label="Denumire" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="AlimentDataExp" value={values.AlimentDataExp} onChange={handleChange} label="Data expirare" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="AlimentCategorie" value={values.AlimentCategorie} onChange={handleChange} label="Categorie" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="AlimentAlergeni" value={values.AlimentAlergeni} onChange={handleChange} label="Alergeni" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
            <TextField name="AlimentNrCalorii" value={values.AlimentNrCalorii} onChange={handleChange} label="Nr. Calorii" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}}/>
        </Grid>
        <Grid item lg={8}>
            <TextField name="ComandaId" value={values.ComandaId} onChange={handleChange} label="Id Comanda" variant="outlined" fullWidth size={'medium'} InputLabelProps={{shrink:true}} />
        </Grid>
        <Grid item lg={8}>
        <Button round  color="success" onClick={handleSubmit} >
                Confirma
            </Button>
        </Grid>
        
    </>
}