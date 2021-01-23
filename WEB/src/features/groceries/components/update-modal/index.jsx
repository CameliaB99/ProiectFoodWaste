import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {repository} from "../../repository";
import {useDispatch, useSelector} from "react-redux";
import {Grid, TextField, Typography} from "@material-ui/core";
import {Modal} from "../../../../core/modal";
import Button from "../../../../core/material-kit/components/CustomButtons/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Fields} from "./fields";
import {GroceryUpdatingContext, useDefaultGroceryUpdatingContext} from "./context";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: '60vh'
    },
}));



export const UpdateModal = () => {
    const { hash } = useLocation()
    const history = useHistory()
    const classes = useStyles();
    const grocery = useSelector(({ groceries }) => groceries.getGrocery.data)
    const groceryId = hash.split('$')[1]
    const context = useDefaultGroceryUpdatingContext({ grocery })

    
    return <GroceryUpdatingContext.Provider value={context}>
        <Modal onClose={() => history.push('/groceries')}
               open={hash.split('$')[0] === '#update_grocery'}
               title={'Actualizare aliment'} isUpdate={true}>
            <Grid container lg={12}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justify={'center'} spacing={6}>
                        <Fields />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    </GroceryUpdatingContext.Provider>

}
