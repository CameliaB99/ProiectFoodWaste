import React, {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {repository} from "../../repository";
import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@material-ui/core";
import {Modal} from "../../../../core/modal";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {FriendUpdatingContext, useDefaultFriendUpdatingContext} from "./context";
import {Fields} from "./fields";

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
    const friend = useSelector(({ friends }) => friends.getFriend.data)
    
    const friendId = hash.split('$')[1]
    const context = useDefaultFriendUpdatingContext({ friend })
   

    return <FriendUpdatingContext.Provider value={context}>
        <Modal onClose={() => history.push('/friends')}
               open={hash.split('$')[0] === '#update_friend'}
               title={'Actualizare prieten'} isUpdate={true}>
            <Grid container lg={12}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container justify={'center'} spacing={6}>
                        <Fields />
                    </Grid>
                </form>
            </Grid>
        </Modal>
    </FriendUpdatingContext.Provider>

}
