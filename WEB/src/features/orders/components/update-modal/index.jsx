import makeStyles from "@material-ui/core/styles/makeStyles";
import {repository} from "../../repository";
import {useHistory, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Modal} from "../../../../core/modal";
import {Grid} from "@material-ui/core";
import {Fields} from "./fields";
import {OrderUpdatingContext, useDefaultOrderUpdatingContext} from "./context";

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
    const order = useSelector(({ orders }) => orders.getOrder.data)
    const context = useDefaultOrderUpdatingContext({ order })
    const orderId = hash.split('$')[1]

    
    return <OrderUpdatingContext.Provider value={context}>
        <Modal onClose={() => history.push('/commands')}
               open={hash.split('$')[0] === '#update_command'}
               title={'Actualizare comanda'} isUpdate ={true}>
            <Grid container lg={12}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justify={'center'} spacing={6}>
                        <Fields />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    </OrderUpdatingContext.Provider>

}
