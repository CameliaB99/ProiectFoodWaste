import React from 'react';
// material-ui components
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "../material-kit/components/CustomButtons/Button.js";

import modalStyle from "../material-kit/assets/jss/material-kit-react/modalStyle";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
const useStyles = makeStyles(modalStyle)

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});


export const Modal = ({ open, onClose, children, title, onSubmit, isUpdate }) => {
    const classes = useStyles();
    return <Dialog
        classes={{
            root: classes.center,
            paper: classes.modal
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => onClose()}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
    >
        <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
        >
            <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => onClose()}
            >
                <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>{title}</h4>
        </DialogTitle>
        <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
        >
            {children}
        </DialogContent>
        <DialogActions
            className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
            <Button round onClick={() => onClose()}>Anuleaza</Button>
            <Box  hidden={isUpdate}> 
            <Button round  color="success" onClick={() => onSubmit()}>
                Confirma
            </Button>
            </Box>
        </DialogActions>
    </Dialog>
}
